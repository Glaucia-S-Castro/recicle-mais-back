import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateUserDTO } from './update-user-dto';
import { isEmail } from 'class-validator';


@Injectable()
export class UpdateUserService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async updateUser(authorization: string, data: UpdateUserDTO) {
    const token = authorization.split(' ')[1];
    const payload = this.validateToken(token);

    try {

      if (!payload.userId) {
        throw new UnauthorizedException({ message: 'Usuário não existe.' });
      }

      if (!isEmail(data.email)) {
        throw new ConflictException({ message: 'Formato de e-mail inválido.' });
      }

      const hash = data.password ? await bcrypt.hash(data.password, 10) : undefined;

      await this.prisma.user.update({
        where: {
          id: payload.userId,
        },
        data: {
          fullname: data.fullname,
          email: data.email,
          password: hash,
          phone: data.phone,
          address: data.address,
          city: data.city,
          state: data.state,
          zip_code: data.zip_code,
          user_type: data.user_type,
          avatar: data.avatar,
        },
      });

      return { message: 'Dados atualizados com sucesso' };
    } catch (error) {
      const userExist = await this.prisma.user.findFirst({
        where: {
          email: data.email,
          id: {
            not: payload.userId,
          },
        },
      });
      if (!!userExist.email) {
        throw new UnauthorizedException({ message: 'Este email já está sendo utilizado.' });
      }


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