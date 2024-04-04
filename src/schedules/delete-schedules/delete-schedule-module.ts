import { Module } from '@nestjs/common';
import { DeleteSheduleController } from './delete-schedule-controller';
import { DeleteSheduleService } from './delete-schedule-service';
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
  controllers: [DeleteSheduleController],
  providers: [DeleteSheduleService, PrismaService],
})
export class DeleteSchedulesModule { }

// tudo certo aqui!!!
// ajustados importações, controllers e providres,  ja inseri também no app-module pra reconhecer a rota
// terminando os itens faltantes no .service e .controlles é só testar.