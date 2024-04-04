import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException

} from '@nestjs/common';

import { PrismaService } from 'src/database/PrismaService';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class ShowScheduleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async showSchedules(authorization: string) {
    // entender se vamos receber mais dados e se sim colocar como argumento na declaração da função acima

    const token = authorization.split(' ')[1];

    try {
      const payload = await this.validateToken(token)

      if (!payload.userId) {
        throw new NotFoundException('Usuário não encontrado');
      }

      //... a partir daqui
      // tudo acima ja foi ajustado com a estrutura basica inclusive importações,  
      // ja tem a lógica do headers pra validar a autenticação de usuario logado 
      // ainda precisa refazer a lógica da função para mostrar os agendamentos
      // precisa ver se vamos fazer algum filtro por dados vindos de query pra mostrar só um ou todos os agendamentos 


    } catch (error) {
      if (error instanceof NotFoundException || error instanceof ConflictException) {
        throw error;
      } else {
        throw new Error(`Erro ao cadastrar agendamento: ${error.message}`);
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