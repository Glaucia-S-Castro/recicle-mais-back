import { Controller, Get, Headers} from '@nestjs/common';
import { ShowUserService } from './show-user-service';
import { ApiBearerAuth, ApiOperation,  ApiTags } from '@nestjs/swagger';

@ApiTags("Show User")
@Controller('user')
@ApiBearerAuth()
export class ShowUserController {
  constructor(private readonly userService: ShowUserService) {}

  @ApiOperation({ summary: 'Exibir informações do usuário logado',description: 'Esta rota precisa inserir o token no Bearer (cadeado ao lado direito superior) e no campo authorization' })
  @Get('profile')
  showUser(@Headers('authorization') authorization: string) {
    return this.userService.getUserByToken(authorization);
  }
}
