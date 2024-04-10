import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from './register-user-dto';
import { UserService } from './register-user-service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

export type User = any;
@ApiTags('Create user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  S;
  @Post()
  @ApiOperation({ summary: 'Criação de conta para novo usuário' })
  async create(@Body() data: UserDTO) {
    return this.userService.createUser(data);
  }
}
