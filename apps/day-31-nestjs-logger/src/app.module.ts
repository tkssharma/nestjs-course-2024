import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MyLogger } from './app / shared / logger.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [TerminusModule, LoggerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
