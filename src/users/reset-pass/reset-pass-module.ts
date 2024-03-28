import { SendGridModule } from '@anchan828/nest-sendgrid';
import { Module } from '@nestjs/common';
import { ResetPasswordController } from './reset-pass-controller';
import { ResetPasswordService } from './reset-pass-service';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  imports: [
    SendGridModule.forRoot({
      apikey: process.env.SENDGRID_API_KEY,
    }),
  ],
  controllers: [ResetPasswordController],
  providers: [ResetPasswordService, PrismaService],
})
export class ResetPasswordModule { }




//antes
// import { Module } from '@nestjs/common';
// import { UpdatePassService } from './update-pass-service';
// import { PrismaService } from 'src/database/PrismaService';
// import { UpdatePassController } from './update-pass-controller';
// import { JwtModule } from '@nestjs/jwt';

// @Module({
//   imports: [
//     JwtModule.register({
//       secret: 'recicleMais',
//       signOptions: { expiresIn: '24h' },
//     }),
//   ],
//   controllers: [UpdatePassController],
//   providers: [UpdatePassService, PrismaService],
// })
// export class UpdatePassModule {}
