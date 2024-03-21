import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
<<<<<<< HEAD:src/users/user-login/login-controller.ts

import { AuthService } from './login-service';
import { AuthGuard } from './login-guard';
=======
import {AuthDTO} from '../auth/auth-dto';
import { AuthService } from './auth-service';
import { AuthGuard } from './auth-guard';
>>>>>>> 0bfa61403ac33cacc8d5cb683426ef8dcea5c258:src/users/auth/auth-controller.ts
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() credentials: AuthDTO) {
    

    try {
      const token = await this.authService.login(credentials.email, credentials.password);
      return { token };
    
    } catch (error) {
      throw new HttpException('Credenciais inválidas', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  showUser(@Request() req) {
    return req.user;
  }
}
