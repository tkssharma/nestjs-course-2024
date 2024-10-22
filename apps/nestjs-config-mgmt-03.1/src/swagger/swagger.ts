import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_CONFIG } from './swagger.config';
const SWAGGER_ENVS = ['production'];
import * as basicAuth from 'express-basic-auth';

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
  const env = process.env.NODE_ENV;
  const username = process.env.SWAGGER_USERNAME;
  const password = process.env.SWAGGER_PASSWORD;
  if (SWAGGER_ENVS.includes(env)) {
    app.use(
      '/docs',
      basicAuth({
        challenge: true,
        users: {
          [username]: password,
        },
      }),
    );
  }

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}
