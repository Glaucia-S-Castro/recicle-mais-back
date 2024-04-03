import { Controller, Delete, Body, Param, Headers } from '@nestjs/common';
import { deleteUserDTO } from './delete-user-dto';
import { DeleteUserService } from './delete-user-service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Delete-user")
@Controller('delete-user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) { }

  @Delete(':id')
  async remove(@Param('id') id: string, @Headers('authorization') authorization: string, @Body('confirmationPhrase') data: deleteUserDTO) {
    await this.deleteUserService.deleteUser(
      authorization,
      id,
      data
    );
    return `Usuário removido com sucesso.`;
  }
}
