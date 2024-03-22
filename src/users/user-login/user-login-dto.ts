import { ApiProperty } from "@nestjs/swagger";

export class AuthDTO {

  @ApiProperty({ example: 'string', description: 'Senha será usada para login' })
  password: string;

  @ApiProperty({ example: 'string', description: 'Email será usado para login' })
  email: string;

}
