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
import { AuthDTO } from './login-user-dto'
import { AuthService } from './login-user-service';
import { AuthGuard } from './login-user-guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("login")
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
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
