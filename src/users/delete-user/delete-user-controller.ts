import { Controller, Delete, Body, Param } from '@nestjs/common';
import { deleteUserDTO } from './delete-user-dto';
import { DeleteUserService } from './delete-user-service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Delete-user")
@Controller('delete-user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) { }

  @Delete(':id')
  async remove(@Param('id') id: string, @Body() data: deleteUserDTO) {
    await this.deleteUserService.deleteUser(
      id,
      data.confirmationPhrase
    );
    return `Usuário removido com sucesso.`;
  }
}
