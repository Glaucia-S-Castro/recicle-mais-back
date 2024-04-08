import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class DeleteUserService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async deleteUser(authorization: string) {
    const token = authorization.split(' ')[1];

    try {
      const payload = await this.validateToken(token)

      if (!payload.userId) {
        throw new NotFoundException('Usuário não encontrado');
      }

      await this.prisma.user.delete({
        where: {
          id: payload.userId,
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof ConflictException) {
        throw error;
      } else {
        throw new Error(`Erro ao excluir usuário: ${error.message}`);
      }
    }
  }

  private async validateToken(token: string) {
    try {

      const payload = await this.jwtService.verify(token);
      return payload;

    } catch (error) {
      throw new UnauthorizedException({
        message: 'Token inválido ou expirado.',
      });
    }
  }
}


