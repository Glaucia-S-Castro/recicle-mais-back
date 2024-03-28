import { Controller, Post, Body } from '@nestjs/common';
import { ResetPasswordService } from './reset-pass-service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("reset-password")

@Controller('reset-password')
export class ResetPasswordController {
  constructor(private readonly resetPasswordService: ResetPasswordService) { }

  @Post()

  async resetPassword(@Body('email') email: string,
  ) {
    return this.resetPasswordService.resetPassword(
      email
    )
  }
}


