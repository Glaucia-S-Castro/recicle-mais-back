import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
  .setTitle('Recicle Mais example')
  .setDescription('Sistema Recicle Mais API')
  .setVersion('1.0')
  .addTag('Create user')
  .addTag('Login user')
  .addBearerAuth()
  .addTag('Update user')
  .addTag('Reset password user ')
  .addTag('Delete user')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
