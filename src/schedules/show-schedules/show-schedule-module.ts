import { Module } from '@nestjs/common';
import { ShowScheduleController } from './show-schedule.controller';
import { ShowScheduleService } from './show-schedule-service';
import { PrismaService } from 'src/database/PrismaService';
import { jwtConstants } from 'src/utils/jwt-config';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [ShowScheduleController],
  providers: [ShowScheduleService, PrismaService],
})
export class ShowScheduleModule { }

// tudo certo aqui!!!
// ajustados importações, controllers e providres,  ja inseri também no app-module pra reconhecer a rota
// terminando os itens faltantes no .service e .controlles é só testar.