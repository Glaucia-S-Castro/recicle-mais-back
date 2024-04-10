import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ResetService } from './reset-user-service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResetPasswordDTO } from './reset-password-dto';

@ApiTags('Reset password user')
@Controller('reset-pass')
export class ResetController {
  constructor(private readonly resetService: ResetService) {}

  @Post()
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Recuperação de senha',
    description:
      'A recuperação de senha, valida o email do usuario e envia nova senha para o mesmo.',
  })
  async resetPassword(@Body() resetData: ResetPasswordDTO) {
    try {
      await this.resetService.ResetPassword(resetData.email);
      return { message: 'Um e-mail com a nova senha foi enviado.' };
    } catch (error) {
      throw new HttpException(
        'Erro ao processar a solicitação de redefinição de senha.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
