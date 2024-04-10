import { Module } from '@nestjs/common';
import { UpdateUserService } from './update-user-service';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateUserController } from './update-user-controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/utils/jwt-config';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [UpdateUserController],
  providers: [UpdateUserService, PrismaService],
})
export class UpdateUserModule {}
