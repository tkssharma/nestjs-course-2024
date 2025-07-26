import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDocument } from './docs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  createDocument(app);
  app.use(cookieParser());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
