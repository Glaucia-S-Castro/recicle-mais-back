import { Body, Controller, Post, Headers } from '@nestjs/common';
import { scheduleDTO } from './register-schedule-dto';
import { ScheduleService } from './register-schedule-service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

export type schedule = any;
@ApiTags("Create schedule")
@Controller('schedule')

export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) { }

  @Post()
  @ApiOperation({ summary: 'Cadastro de agendamento de coleta' })
  async create(@Headers('authorization') authorization: string, @Body() data: scheduleDTO) {
    return this.scheduleService.registerSchedule(
      authorization,
      data
    );
  }
}

// tudo certo aqui!
//ja ajustado rota, mensagem do swagger,class, importações e dados a serem recebidos do body e do headers
// só corrigir a função de cadastro la no .service e testar