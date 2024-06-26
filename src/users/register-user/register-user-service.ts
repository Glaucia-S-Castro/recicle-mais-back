import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { isEmail } from 'class-validator';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './register-user-dto';

@Injectable()
export class UserService {
  private readonly saltOrRounds = 10;
  constructor(private prisma: PrismaService) { }

  async createUser(data: UserDTO) {
    if (!isEmail(data.email)) {
      throw new ConflictException({ message: 'Formato de e-mail inválido.' });
    }
    const userExist = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (userExist) {
      throw new ConflictException({
        message: 'Este email já esta sendo utilizado.',
      });
    }
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(data.password, saltOrRounds);
    const user = await this.prisma.user.create({
      data: {
        fullname: data.fullname,
        email: data.email,
        password: hash,
        phone: data.phone,
        user_type: data.user_type,
        avatar: data.avatar,
        address: data.address,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code
      },
    });
    const { ...newUser } = user;
    return newUser;
  }

  private readonly users = this.prisma.user.findMany();
  async findOne(fullname: string): Promise<any | undefined> {
    return (await this.users).find((user) => user.fullname === fullname);
  }

}