import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filters/exception.filter';
import { TaskInterceptor } from './core/interceptor/simple.interceptor';
import { EmailValidationPipe } from './core/pipes/custom.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalPipes(new EmailValidationPipe())
  await app.listen(3012);
}
bootstrap();
