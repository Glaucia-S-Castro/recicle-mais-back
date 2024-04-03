import { Controller, Get, Headers} from '@nestjs/common';
import { ShowUserService } from './show-user-service';
import { ApiBearerAuth, ApiOperation,  ApiTags } from '@nestjs/swagger';

@ApiTags("Show User")
@Controller('user')
@ApiBearerAuth()
export class ShowUserController {
  constructor(private readonly userService: ShowUserService) {}

  @ApiOperation({ summary: 'Exibir informações do usuário logado' })
  @Get('profile')
  showUser(@Headers('authorization') authorization: string) {
    return this.userService.getUserByToken(authorization);
  }
}
