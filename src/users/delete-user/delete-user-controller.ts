import { Controller, Delete, Body, Param } from '@nestjs/common';
import { deleteUserDTO } from './delete-user-dto';
import { DeleteUserService } from './delete-user-service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Delete user")
@Controller('delete-user')
@ApiBearerAuth()
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) { }

  @Delete(':id')
  @ApiOperation({ summary: 'Exclusão conta do usuário'})
  async remove(@Param('id') id: string, @Body() data: deleteUserDTO) {
    await this.deleteUserService.deleteUser(
      id,
      data.confirmationPhrase
    );
    return `Usuário removido com sucesso.`;
  }
}