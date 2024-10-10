import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_CONFIG } from './swagger.config';

export function createDocument(app: INestApplication) {
  const builder = new DocumentBuilder()
    .setTitle(SWAGGER_CONFIG.title)
    .setDescription(SWAGGER_CONFIG.description)
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'authorization',
    )
    .setVersion(SWAGGER_CONFIG.version);
  const options = builder.build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}
