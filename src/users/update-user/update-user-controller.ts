import { Controller, Post, Body, Headers } from '@nestjs/common';
import { UpdateUserService } from './update-user-service';

@Controller('updateUser')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) { }

  @Post('update-user')
  async updateUser(
    @Headers('authorization') authorization: string,
    @Body('email') email: string,
    @Body('newPassword') newPassword: string,
  ) {
    return this.updateUserService.updateUser(
      authorization,
      email,
      newPassword,
    );
  }
}
