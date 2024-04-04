import { Module } from '@nestjs/common';
import { ScheduleService } from './register-schedule-service';
import { ScheduleController } from './register-schedule-controller';
import { PrismaService } from 'src/database/PrismaService';


@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, PrismaService],
})
export class ScheduleModule { }

// tudo certo aqui!!!
// ajustados importações, controllers e providres,  ja inseri também no app-module pra reconhecer a rota
// terminando os itens faltantes no .service e .controlles é só testar.