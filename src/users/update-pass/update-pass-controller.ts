import { Controller, Put, Body, Headers } from '@nestjs/common';
import { UpdatePassService } from './update-pass-service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags("Reset password user ")
@Controller('update-password')
@ApiBearerAuth()
export class UpdatePassController {
  constructor(private readonly updatePassService: UpdatePassService) { }

  @Put()
  @ApiOperation({ summary: 'Alteração senha do usuário', description: 'Altera a senha do usuário, enviando uma nova por email.' })
  async updatePassword(
    @Headers('authorization') authorization: string,
    @Body('email') email: string,
    @Body('newPassword') newPassword: string,
  ) {
    return this.updatePassService.updatePassword(
      authorization,
      email,
      newPassword,
    );
  }
}
