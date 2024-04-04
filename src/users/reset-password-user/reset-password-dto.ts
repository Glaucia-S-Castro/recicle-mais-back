import { ApiProperty } from "@nestjs/swagger";

export class ResetPasswordDTO  {

  @ApiProperty({ example: 'example@example.com', description: 'Novo email do usuário' })

  email: string;

  @ApiProperty({ example: 'string', description: 'Nova senha do usuário' })

  newPassword: string;

}
