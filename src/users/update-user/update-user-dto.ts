export type UpdateUserDTO = {

  id?: number;
  fullname: string;

  @ApiProperty({ example: 'string', description: 'Senha será usada para login' })
  password: string;

  @ApiProperty({  example: 'example@example.com', description: 'Email será usado para login' })
  email: string;

  @ApiProperty({ example: 'string', description: 'Número usado para contato' })
  phone: string;

  @ApiProperty({ example: 'string', description: 'Endereço do usuário' })
  address: string;

  @ApiProperty({ example: 'string', description: 'Cidade do usuário' })
  city: string;

  @ApiProperty({ example: 'string', description: 'Estado do usuário' })
  state: string;

  @ApiProperty({ example: 'string', description: 'Código postal do usuário' })
  zip_code: string;

  @ApiProperty({ example: 'string', description: 'Tipo de usuário' })
  user_type: string;

  @ApiProperty({ example: 'string', description: 'URL da imagem de avatar do usuário' })
  avatar: string;
}
