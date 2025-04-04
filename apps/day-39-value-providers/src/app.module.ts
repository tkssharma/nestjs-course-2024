import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// value providers
@Module({
  controllers: [AppController],
  providers: [
    // `string` value provider
    {
      provide: 'DATABASE_NAME',
      // INJECT TOKEN
      useValue: 'anything ...',
    },

    // `object` value provider
    {
      provide: 'CRON_CONFIG',
      // INJECT TOKEN
      useValue: {
        max: 11,
        runOn: 'start',
      },
    },
  ],
})
export class AppModule {}
