import { ApiProperty } from "@nestjs/swagger";


export type UserDTO = {

  id: number;
  fullname: string;
  password: string;
  email: string;
  phone: string;
  user_type: string;
  avatar: string;
  endereço: string;
  municipio: string;
  estado: string;
  cep: string;
}
