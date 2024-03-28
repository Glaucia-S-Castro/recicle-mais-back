import { Module } from '@nestjs/common';
import { UserModule } from './users/register-user/register-user-module';
import { AuthModule } from './users/login-user/login-user-module';
import { UpdateUserModule } from './users/update-user/update-user-module';
import { ResetPasswordModule } from './users/reset-pass/reset-pass-module';
import { DeleteUserModule } from './users/delete-user/delete-user-module';

@Module({
  imports: [UserModule, AuthModule, UpdateUserModule, ResetPasswordModule, DeleteUserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
