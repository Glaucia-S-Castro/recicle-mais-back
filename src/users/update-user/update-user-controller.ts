import { Body, Controller, Headers, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateUserDTO } from './update-user-dto';
import { UpdateUserService } from './update-user-service';
@ApiTags('Update user')
@Controller('update-user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Put()
  @ApiOperation({
    summary: 'Atualização perfil do usuário',
    description: 'Atualiza o dados do perfil.',
  })
  async updateUser(
    @Headers('authorization') authorization: string,
    @Body() userData: UpdateUserDTO,
  ) {
    return this.updateUserService.updateUser(authorization, userData);
  }
}
