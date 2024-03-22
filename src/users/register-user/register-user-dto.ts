import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {

  id: number;

  @ApiProperty({ example: 'string', description: 'Nome completo do usuário' })
  fullname: string;

  @ApiProperty({ example: 'string', description: 'Senha será usada para login' })
  password: string;

  @ApiProperty({ example: 'string', description: 'Email será usado para login' })
  email: string;

  @ApiProperty({ example: 'string', description: 'Numero usado para contato' })
  phone: string;

  @ApiProperty({ example: 'string', description: 'Tipo de usuário' })
  user_type: string;

  @ApiProperty({ example: 'string', description: 'URL da imagem de avatar do usuário' })
  avatar: string;
}
