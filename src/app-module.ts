import { Module } from '@nestjs/common';
import { UserModule } from './users/register-user/register-user-module';
import { AuthModule } from './users/login-user/login-user-module';
import { UpdateUserModule } from './users/update-user/update-user-module';
import { DeleteUserModule } from './users/delete-user/delete-user-module';
import { ResetModule } from './users/reset-password-user/reset-user-module';
import { ShowUserModule } from './users/show-user/show-user-module';



@Module({
  imports: [UserModule, AuthModule, ResetModule, UpdateUserModule, DeleteUserModule, ResetModule,ShowUserModule ],
  controllers: [],
  providers: [],
})
export class AppModule { }
