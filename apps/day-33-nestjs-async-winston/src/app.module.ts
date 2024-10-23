import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';

// import { LoggerModule } from './logger/logger.module';
// import { MyLogger } from './app/shared/logger.service';
// import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike(
              'demo-app-nestjs-async-logger',
              {
                colors: true,
                prettyPrint: true,
                processId: true,
                appName: true,
              },
            ),
          ),
        }),
        // other transports...
      ],
    }),
    TerminusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
