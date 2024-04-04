import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException

} from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { JwtService } from '@nestjs/jwt';
import { scheduleDTO } from './register-schedule-dto';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService,
    private readonly jwtService: JwtService) { }

  async registerSchedule(authorization: string, data: scheduleDTO) {
    const token = authorization.split(' ')[1];

    try {
      const payload = await this.validateToken(token)

      if (!payload.userId) {
        throw new NotFoundException('Usuário não encontrado');
      }

      //... a partir daqui
      // tudo acima ja foi ajustado inclusive importações, mas precisa refazer a lógica da função para cadastrar o agendamento, 
      // ja tem a lógica do headers pra validar a autenticação de usuario logado mas precisa ver o que ela precisa receber do body 
      // e completar a lógica de cadastro pra inserir os dados no banco e enviar e-mail de confirmação do usuário





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

  // Aqui... lembrar de criar o readonly  do prisma, abaixo exemplo de cmo esta no registro de usuario:

  // private readonly users = this.prisma.user.findMany();
  // async findOne(fullname: string): Promise<any | undefined> {
  //   return (await this.users).find((user) => user.fullname === fullname);

  // }
}