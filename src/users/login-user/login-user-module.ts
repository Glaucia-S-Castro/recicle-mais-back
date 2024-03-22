import { Module } from '@nestjs/common';
import { AuthController } from './login-user-controller';
import { AuthService } from './login-user-service';
import { UserService } from '../register-user/register-user-service';
import { PrismaService } from 'src/database/PrismaService';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../utils/jwt-config';

@Module({
  imports: [JwtModule.register(jwtConstants)],
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService],
})
export class AuthModule { }
