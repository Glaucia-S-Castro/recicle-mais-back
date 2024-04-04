import { Controller, Get, Headers } from '@nestjs/common';
import { ShowScheduleService } from './show-schedule-service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Show Schedules")
@Controller('show')
@ApiBearerAuth()
export class ShowScheduleController {
  constructor(private readonly showScheduleService: ShowScheduleService) { }

  @ApiOperation({ summary: 'Exibir agendamentos confirmados do usuário logado' })
  // tudo acima ja foi ajustado com a estrutura basica inclusive importações, e mensagem do swagger

  @Get('schedules')
  showSchedules(@Headers('authorization') authorization: string) {

    //... a partir daqui
    // ja tem a lógica do headers pra validar a autenticação de usuario logado 
    // ainda precisa refazer a lógica da função para mostrar os agendamentos 
    // temos que entender se vamos fazer algum filtro por dados vindos de query pra mostrar só um ou todos os agendamentos 
    // se formos receber mais dados vindos de query,paramns ou body precisa importar la em cima no @nestjs/common e inserir como argumento da função showSchedules acima
    // e corrigir o return abaixo

    return this.showScheduleService.showSchedules(authorization);
  }
}
