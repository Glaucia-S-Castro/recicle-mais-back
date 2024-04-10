import { Module } from '@nestjs/common';
import { DeleteUserController } from './delete-user-controller';
import { DeleteUserService } from './delete-user-service';
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
  controllers: [DeleteUserController],
  providers: [DeleteUserService, PrismaService],
})
export class DeleteUserModule {}
