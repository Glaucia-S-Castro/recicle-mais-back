import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ResetService } from './reset-user-service';
import { ApiTags } from '@nestjs/swagger';
import { ResetPasswordDTO } from './reset-password-dto';

@ApiTags("reset")
@Controller('reset-pass')
export class ResetController {
  constructor(private readonly resetService: ResetService) { }

  @Post()
  async resetPassword(@Body() resetData: ResetPasswordDTO) {
    try {
      await this.resetService.ResetPassword(resetData.email);
      return { message: 'Um e-mail com a nova senha foi enviado.' };
    } catch (error) {
      throw new HttpException('Erro ao processar a solicitação de redefinição de senha.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
