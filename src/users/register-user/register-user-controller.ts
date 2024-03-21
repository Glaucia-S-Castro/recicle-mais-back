import { Body, Controller, Post, Put } from '@nestjs/common';
import { UserDTO } from './register-user-dto';
import { UserService } from './register-user-service';
import { ApiTags } from '@nestjs/swagger';

export type User = any;
@ApiTags("Users")
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() data: UserDTO) {
    return this.userService.createUser(data);
  }

  // @Put()
  // async update(@Body() data: UserDTO) {
  //   return this.userService.updateUser(data);
  // }
}
