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
import {AuthDTO} from '../auth/auth-dto';
import { AuthService } from './auth-service';
import { AuthGuard } from './auth-guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
