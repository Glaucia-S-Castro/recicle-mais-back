import { Controller, Body, Headers, Put } from '@nestjs/common';
import { UpdateUserService } from './update-user-service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateUserDTO } from './update-user-dto';
@ApiTags("Update user")

@Controller('update-user')

export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) { }

  @Put()
  @ApiOperation({ summary: 'Atualização perfil do usuário', description: 'Esta rota precisa inserir o token no Bearer (cadeado ao lado direito superior) e no campo authorization' })

  async updateUser(
    @Headers('authorization') authorization: string,
    @Body() userData: UpdateUserDTO
  ) {
    return this.updateUserService.updateUser(authorization, userData);
  }
}
