import { Module } from '@nestjs/common';
import {  ResetController } from './reset-user-controller';

import { PrismaService } from 'src/database/PrismaService';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../utils/jwt-config';
import { ResetService } from './reset-user-service';
import { MailerService } from 'src/mailer/mailer.service';

@Module({
  imports: [JwtModule.register(jwtConstants)],
  controllers: [ResetController],
  providers: [ ResetService,PrismaService, MailerService],
})
export class ResetModule { }
