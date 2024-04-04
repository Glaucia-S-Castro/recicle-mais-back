import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class DeleteSheduleService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }


  //... a aprtir daqui
  // ja ajustados rota, class, importações e inserido autorização a ser recebida do header pra validar o usuario logado e feita a parte lógica dessa validação
  // ainda precisa refazer a continuação da lógica da função para deletar só o agendamento específico 
  // ver se vai receber o id desse agendamento pra identificar qual é pra deletar, e se tiver colocar como argumento na declaração da função abaixo


  async deleteSchedule(authorization: string) {
    const token = authorization.split(' ')[1];

    try {
      const payload = await this.validateToken(token)

      if (!payload.userId) {
        throw new NotFoundException('Usuário não encontrado');
      }

      //...aqui!!! refazer a lógica da função para identificar o agendamento e deletar ele do banco

      // await this.prisma.user.delete({
      //   where: {
      //     id: payload.userId,
      //   },
      // });


    } catch (error) {
      if (error instanceof NotFoundException || error instanceof ConflictException) {
        throw error;
      } else {
        throw new Error(`Erro ao excluir agendamento: ${error.message}`);
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


