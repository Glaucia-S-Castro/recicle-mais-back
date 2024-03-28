import { HttpException, HttpStatus, Injectable, Body } from '@nestjs/common';
import { SendGridService } from '@anchan828/nest-sendgrid';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/PrismaService';
import * as jwt from 'jsonwebtoken';
//import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ResetPasswordService {
  constructor(private readonly senGrid: SendGridService,
    private prisma: PrismaService) { }

  async resetPassword(@Body('email') email: string,) {

    try {

      const user = await this.prisma.user.findFirst({
        where: { email: email },
      });

      if (!user) {
        throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
      }

      const resetToken = jwt.sign({ userId: user.id }, '', { expiresIn: '5m' });

      await this.senGrid.send({
        to: email,
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
        subject: "Redefinição de Senha",
        html: `<p> Olá! Você solicitou a redefinição de senha.</p>
        <p>Clique no link a seguir para redefinir sua senha:</p>
        <a href="http://localhost:3000/reset-password/${resetToken}">Redefinir Senha</a>`

      });
      return { message: 'Um e-mail foi enviado com instruções para redefinir sua senha.' };

    } catch (error) {
      throw new Error(`Erro ao enviar e-mail de redefinição: ${error.message}`);
    }
  }
}













































































// import {
//   ConflictException,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// import { PrismaService } from 'src/database/PrismaService';

// @Injectable()
// export class UpdatePassService {
//   constructor(
//     private prisma: PrismaService,
//     private readonly jwtService: JwtService,
//   ) {}

//   async updatePassword(
//     authorization: string,
//     email: string,
//     newPassword: string,
//   ) {
//     if (!email || !newPassword) {
//       throw new ConflictException({
//         message: 'Preencha os campos email e/ou senha.',
//       });
//     }

//     const token = authorization.split(' ')[1];

//     const payload = this.validateToken(token);

//     try {
//       const user = await this.prisma.user.findFirst({
//         where: {
//           email: email,
//         },
//       });

//       if (!user) {
//         throw new ConflictException({ message: 'Usuário não encontrado.' });
//       }

//       if (user.id !== payload.userId) {
//         throw new UnauthorizedException({ message: 'Usuário não autorizado.' });
//       }

//       const saltOrRounds = 10;
//       const hash = await bcrypt.hash(newPassword, saltOrRounds);

//       await this.prisma.user.update({
//         where: {
//           email: email,
//         },
//         data: {
//           password: hash,
//         },
//       });

//       return { message: 'Senha atualizada com sucesso.' };
//     } catch (error) {
//       throw new UnauthorizedException({ message: 'Não autorizado.' });
//     }
//   }

//   private validateToken(token: string) {
//     try {
//       const payload = this.jwtService.verify(token);
//       return payload;
//     } catch (error) {
//       throw new UnauthorizedException({
//         message: 'Token inválido ou expirado.',
//       });
//     }
//   }
// }
