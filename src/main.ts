import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { createDocument } from "./swagger/swagger";
import { HttpExceptionFilter } from "./core/filters/exception.filter";
import { TaskInterceptor } from "./core/interceptor/simple.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TaskInterceptor());
  createDocument(app);
  await app.listen(3012);
}
bootstrap();
