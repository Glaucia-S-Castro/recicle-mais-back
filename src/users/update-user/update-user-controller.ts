import { Controller, Body, Headers, Put } from '@nestjs/common';
import { UpdateUserService } from './update-user-service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("UpdateUser")
@Controller('update-user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) { }

  @Put()
  async updateUser(
    @Headers('authorization') authorization: string,
    @Body('fullname') fullname: string,
    @Body('password') password: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
    @Body('user-type') user_type: string,
    @Body('avatar') avatar: string
  ) {
    return this.updateUserService.updateUser(
      authorization,
      fullname,
      password,
      email,
      phone,
      user_type,
      avatar
    );
  }
}
