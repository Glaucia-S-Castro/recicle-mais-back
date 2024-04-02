import { Controller, Put, Body, Headers } from '@nestjs/common';
import { UpdatePassService } from './update-pass-service';
import { ApiTags } from '@nestjs/swagger';
import { UpdatePassDTO } from './update-pass-dto';
@ApiTags("updatePass")
@Controller('update-password')
export class UpdatePassController {
  constructor(private readonly updatePassService: UpdatePassService) { }

  @Put()
  async updatePassword(
    @Headers('authorization') authorization: string,
    @Body() updatePassData: UpdatePassDTO,
  ) {
    return this.updatePassService.updatePassword(
      authorization,
      updatePassData.email,
      updatePassData.newPassword,
    );
  }
}
