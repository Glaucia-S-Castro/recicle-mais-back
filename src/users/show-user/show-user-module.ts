import { Module } from '@nestjs/common';
import { ShowUserController } from './show-user.controller';
import { ShowUserService } from './show-user-service';
import { PrismaService } from 'src/database/PrismaService';
import { JwtModule } from '@nestjs/jwt';


@Module({ imports: [
  JwtModule.register({
    secret: 'recicleMais',
    signOptions: { expiresIn: '24h' },
  }),
],
  controllers: [ShowUserController],
  providers: [ShowUserService, PrismaService],
})
export class ShowUserModule {}
