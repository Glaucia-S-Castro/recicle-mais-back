import { Module } from '@nestjs/common';
import { UserModule } from './users/register-user/register-user-module';
import { AuthModule } from './users/user-login/user-login-module';
import { UpdateUserModule } from './users/update-user/update-user-module';
import { UpdatePassModule } from './users/update-pass/update-pass-module';
import { DeleteUserModule } from './users/delete-user/delete-user-module';

@Module({
  imports: [UserModule, AuthModule, UpdateUserModule, UpdatePassModule, DeleteUserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
