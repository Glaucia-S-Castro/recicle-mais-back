import { Module } from '@nestjs/common';
import { UpdateUserService } from './update-user-service';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateUserController } from './update-user-controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'recicleMais',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [UpdateUserController],
  providers: [UpdateUserService, PrismaService],
})
export class UpdateUserModule { }
