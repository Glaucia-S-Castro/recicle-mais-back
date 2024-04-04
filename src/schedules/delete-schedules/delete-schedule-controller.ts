import { Controller, Delete, Headers } from '@nestjs/common';
import { DeleteSheduleService } from './delete-schedule-service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Delete Schedule")
@Controller('delete-schedule')
@ApiBearerAuth()
export class DeleteSheduleController {
  constructor(private readonly deleteScheduleService: DeleteSheduleService) { }

  @Delete()
  @ApiOperation({ summary: 'Exclusão do agendamento confirmado', description: 'Exclusão permanente do agendamento confirmado.' })
  async remove(@Headers('authorization') authorization: string) {

    //... a aprtir daqui
    // ja ajustados rota, class, importações, mensagem de descrição do swagger, e inserido autorização a ser recebida do header pra validar o usuario
    //ainda refazer a lógica da função para deletar só agendamento específico ver se vai receber o id desse agendamento pra identificar qual é pra deletar
    // e se tem outros campos alem da autorização pra receber

    await this.deleteScheduleService.deleteSchedule(
      authorization
    );
    return `Agendamento de coleta excluído com sucesso.`;
  }
}