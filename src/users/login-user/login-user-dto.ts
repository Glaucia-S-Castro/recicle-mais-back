import { ApiProperty } from "@nestjs/swagger";

export type AuthDTO = {

  password: string;
  email: string;

}