import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UpdateUserService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async updateUser(
    authorization: string,
    // email: string,
    // newPassword: string,
    fullname: string,
    password: string,
    email: string,
    phone: string,
    user_type: string,
    avatar: string
  ) {
    if (!email || !password) {
      throw new ConflictException({
        message: 'Preencha os campos email e/ou senha.',
      });
    }

    const token = authorization.split(' ')[1];

    const payload = this.validateToken(token);

    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new ConflictException({ message: 'Usuário não encontrado.' });
      }

      if (user.id !== payload.userId) {
        throw new UnauthorizedException({ message: 'Usuário não autorizado.' });
      }

      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);

      await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          fullname,
          password: hash,
          email,
          phone,
          user_type,
          avatar
        },
      });

      return { message: 'Dados atualizados com sucesso' };
    } catch (error) {
      throw new UnauthorizedException({ message: 'Não autorizado.' });
    }
  }

  private validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      return payload;
    } catch (error) {
      throw new UnauthorizedException({
        message: 'Token inválido ou expirado.',
      });
    }
  }
}
