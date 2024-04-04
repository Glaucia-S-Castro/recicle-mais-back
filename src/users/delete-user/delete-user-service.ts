import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class DeleteUserService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async deleteUser(id: string, authorization: string) {
    const token = authorization.split(' ')[1];

    try {
      const payload = await this.validateToken(token)

      console.log(payload)

      if (!payload.userId) {
        throw new NotFoundException('Usuário não encontrado');
      }

      if (id !== payload.userId) {
        throw new ConflictException('A solicitação não pôde ser concluída devido a um conflito, refaça o login e tente novamente');
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
      console.log('payload:', payload)
      return payload;

    } catch (error) {
      console.log(error)
      throw new UnauthorizedException({
        message: 'Token inválido ou expirado.',
      });
    }
  }
}


