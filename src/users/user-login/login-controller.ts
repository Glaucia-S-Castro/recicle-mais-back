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

import { AuthService } from './login-service';
import { AuthGuard } from './login-guard';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() credentials: { email: string; password: string }) {
    const { email, password } = credentials;

    try {
      const token = await this.authService.login(email, password);
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
