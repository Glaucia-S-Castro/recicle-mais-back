import { Module } from '@nestjs/common';
import { UserModule } from './user/user/user-module';
import { AuthModule } from './user/Auth/auth-module';
import { UpdatePassModule } from './user/updatePass/update-pass-module';
import { DeleteUserModule } from './user/deleteUser/delete-user-module';

@Module({
  imports: [UserModule, AuthModule, UpdatePassModule, DeleteUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
