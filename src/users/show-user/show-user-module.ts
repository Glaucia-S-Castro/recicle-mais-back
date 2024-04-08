import { Module } from '@nestjs/common';
import { ShowUserController } from './show-user.controller';
import { ShowUserService } from './show-user-service';
import { PrismaService } from 'src/database/PrismaService';
import { jwtConstants } from 'src/utils/jwt-config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [ShowUserController],
  providers: [ShowUserService, PrismaService],
})
export class ShowUserModule { }
