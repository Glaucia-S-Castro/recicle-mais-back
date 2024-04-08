import { Controller, Delete, Headers } from '@nestjs/common';
import { DeleteUserService } from './delete-user-service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Delete user")
@Controller('delete-user')
@ApiBearerAuth()
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) { }

<<<<<<< HEAD
  @Delete(':id')
  @ApiOperation({ summary: 'Exclusão conta do usuário'})
  async remove(@Param('id') id: string, @Body() data: deleteUserDTO) {
=======
  @Delete()
  @ApiOperation({ summary: 'Exclusão conta do usuário', description: 'Exclusão permanente da conta do usuário logado.' })
  async remove(@Headers('authorization') authorization: string) {
    console.log('Token JWT recebido:', authorization);

>>>>>>> 5bdfe1dcb9aa053bfb5137eec728a4ebbb07a661
    await this.deleteUserService.deleteUser(
      authorization
    );
    return `Usuário removido com sucesso.`;
  }
}