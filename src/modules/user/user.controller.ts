import { Body, Controller, Post, Put } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

export type User = any;
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserDTO) {
    return this.userService.createUser(data);
  }

  @Put()
  async update(@Body() data: UserDTO) {
    return this.userService.updateUser(data);
  }
}
