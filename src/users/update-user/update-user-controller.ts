import { Controller, Body, Headers, Put } from '@nestjs/common';
import { UpdateUserService } from './update-user-service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDTO } from './update-user-dto';
@ApiTags("UpdateUser")
@Controller('update-user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) { }

  @Put()
  async updateUser(
    @Headers('authorization') authorization: string,
    @Body() updateUserData: UpdateUserDTO,
  ) {
    return this.updateUserService.updateUser(
      authorization,
      updateUserData.fullname,
      updateUserData.password,
      updateUserData.email,
      updateUserData.phone,
      updateUserData.user_type,
      updateUserData.avatar
    );
  }
}
