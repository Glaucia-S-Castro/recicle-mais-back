import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Recicle Mais API')
    .setDescription('Sistema Recicle Mais API. Nosso objetivo é conectar você com catadores que vão até sua casa, informar pontos de coleta na rua e dar informações sobre reciclagem.')
    .setVersion('1.0')
    .addTag('Create user')
    .addTag('Login user')
    .addTag('Reset password user')
    .addBearerAuth()
    .addTag("Show User")
    .addTag('Update user')
    .addTag('Delete user')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
