import { Module } from '@nestjs/common';
import { UserModule } from './users/register-user/user-module';
import { AuthModule } from './users/Auth/auth-module';
import { UpdateUserModule } from './users/update-user/update-user-module';
import { UpdatePassModule } from './users/update-password/update-pass-module';
import { DeleteUserModule } from './users/delete-user/delete-user-module';

@Module({
  imports: [UserModule, AuthModule, UpdateUserModule, UpdatePassModule, DeleteUserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
