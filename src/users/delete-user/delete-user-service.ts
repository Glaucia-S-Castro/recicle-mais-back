import { Injectable, ConflictException, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { deleteUserDTO } from './delete-user-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DeleteUserService {
  constructor(private readonly prisma: PrismaService,
    private readonly jwtService: JwtService) { }

  async deleteUser(id: string, authorization: string, data: deleteUserDTO): Promise<void> {

    try {

      const user = await this.prisma.user.findFirst({
        where: { id: parseInt(id) }
      });

      const token = authorization.split(' ')[1];
      const payload = this.validateToken(token);

      // if (user.id !== payload.userId) {
      //   throw new UnauthorizedException({ message: 'Usuário não autorizado.' });
      // }


      if (!data.confirmationPhrase) {
        throw new BadRequestException({ message: 'Para exclusão da conta é obrigatório inserir a frase de confirmação de exclusão' });
      }
      if (data.confirmationPhrase !== 'Excluir-minha-conta') {
        throw new BadRequestException({ message: 'Para exclusão da conta é obrigatório inserir a frase de confirmação de exclusão' });
      }

      await this.prisma.user.delete({
        where: {
          id: parseInt(id),
        },
      });
    } catch (error) {
      throw new Error(`Erro ao excluir usuário: ${error.message}`);
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


