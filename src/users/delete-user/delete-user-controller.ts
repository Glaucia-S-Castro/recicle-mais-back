import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserService } from './delete-user-service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags("Delete user")
@Controller('delete-user')
@ApiBearerAuth()
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Exclusão da conta do usuário'})
  async remove(@Param('id') id: string) {
    
    await this.deleteUserService.deleteUser(id);
    return `Usuário removido com sucesso.`;
  }
}
