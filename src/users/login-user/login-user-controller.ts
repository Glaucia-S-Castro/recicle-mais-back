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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Login user")
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  @ApiOperation({ summary: 'Autenticação do  usuário', description: 'Criação do token de login.' })
  async login(@Body() credentials: AuthDTO) {


    try {
      const token = await this.authService.login(credentials.email, credentials.password);
      return { token };

    } catch (error) {
      throw new HttpException('Credenciais inválidas', HttpStatus.UNAUTHORIZED);
    }
  }

}
