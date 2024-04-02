import { ApiProperty } from "@nestjs/swagger";

export type ResetPasswordDTO = {

  password: string;
  email: string;

}
