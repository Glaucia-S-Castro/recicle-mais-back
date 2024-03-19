import { Module } from '@nestjs/common';
import { UserModule } from './users/user/user-module';
import { AuthModule } from './users/Auth/auth-module';
import { UpdatePassModule } from './users/updatePass/update-pass-module';
import { DeleteUserModule } from './users/deleteUser/delete-user-module';

@Module({
  imports: [UserModule, AuthModule, UpdatePassModule, DeleteUserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
