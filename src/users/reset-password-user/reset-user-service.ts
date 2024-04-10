import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/PrismaService';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class ResetService {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) {}

  async ResetPassword(email: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    const newPass = this.generateRandomPassword();

    const hashedPassword = await bcrypt.hash(newPass, 10);

    await this.prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    await this.sendNewPasswordByEmail(email, newPass);
  }

  private generateRandomPassword(): string {
    const newPassword = Math.random().toString(36).slice(-8);
    return newPassword;
  }

  private async sendNewPasswordByEmail(
    email: string,
    newPassword: string,
  ): Promise<void> {
    try {
      await this.mailerService.sendEmail(
        email,
        'Redefinição de Senha',
        `Sua nova senha: ${newPassword}`,
      );
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      throw new HttpException(
        'Erro ao enviar e-mail',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
