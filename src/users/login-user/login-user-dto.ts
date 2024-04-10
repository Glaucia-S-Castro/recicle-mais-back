import { ApiProperty } from '@nestjs/swagger';

export class AuthDTO {
  @ApiProperty({
    example: 'example@example.com',
    description: 'Novo email do usuário',
  })
  email: string;

  @ApiProperty({ example: 'string', description: 'Senha do usuário' })
  password: string;
}
