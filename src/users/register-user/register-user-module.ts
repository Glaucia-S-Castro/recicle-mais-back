import { Module } from '@nestjs/common';
import { UserService } from './register-user-service';
import { UserController } from './register-user-controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule { }
