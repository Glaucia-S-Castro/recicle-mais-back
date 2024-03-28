import { ApiProperty } from "@nestjs/swagger";

export class ResetPasswordDTO {

  @ApiProperty({ example: 'string', description: 'Senha será usada para redefinir senha' })
  password: string;

  @ApiProperty({ example: 'string', description: 'Email será usado para redefinir senha' })
  email: string;

}
