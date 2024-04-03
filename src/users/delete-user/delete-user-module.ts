import { Module } from '@nestjs/common';
import { DeleteUserController } from './delete-user-controller';
import { DeleteUserService } from './delete-user-service';
import { PrismaService } from 'src/database/PrismaService';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'recicleMais',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [DeleteUserController],
  providers: [DeleteUserService, PrismaService],
})
export class DeleteUserModule { }
