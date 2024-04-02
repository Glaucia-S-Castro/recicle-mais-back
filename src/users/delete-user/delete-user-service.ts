import { Injectable, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class DeleteUserService {
  constructor(private readonly prisma: PrismaService) { }

  async deleteUser(id: string, confirmationPhrase: string): Promise<void> {

    try {

      if (!confirmationPhrase) {
        throw new BadRequestException({ message: 'Para exclusão da conta é obrigatório inserir a frase de confirmação de exclusão' });

      } else {

        await this.prisma.user.delete({
          where: {
            id: parseInt(id),
          },
        });
      }
    } catch (error) {
      throw new Error(`Erro ao excluir usuário: ${error.message}`);
    }
  }
}