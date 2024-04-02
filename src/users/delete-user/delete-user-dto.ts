import { ApiProperty } from "@nestjs/swagger";

export class deleteUserDTO {

    @ApiProperty({ example: 'string', description: 'Frase para confirmar exclusao do perfil' })

    confirmationPhrase: string;

}; 