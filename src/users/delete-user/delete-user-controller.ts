import { Controller, Delete, Headers } from '@nestjs/common';
import { DeleteUserService } from './delete-user-service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Delete user")
@Controller('delete-user')
@ApiBearerAuth()
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) { }

  @Delete()
  @ApiOperation({ summary: 'Exclusão conta do usuário', description: 'Exclusão permanente da conta do usuário logado.' })
  async remove(@Headers('authorization') authorization: string) {
    console.log('Token JWT recebido:', authorization);

    await this.deleteUserService.deleteUser(
      authorization
    );
    return `Usuário removido com sucesso.`;
  }
}