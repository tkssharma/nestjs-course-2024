require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDocument } from './docs/swagger';
// import { MyLogger } from './app/shared/logger.service';
import { Logger } from 'nestjs-pino';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  // app.useLogger(app.get(Logger));

  app.use((req, _, next) => {
    //console.log(`Got invoked: '${req.originalUrl}'`);
    next();
  });
  createDocument(app);
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
