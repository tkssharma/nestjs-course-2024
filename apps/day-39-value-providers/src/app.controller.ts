import { Controller, Inject } from '@nestjs/common';

@Controller('/users')
export class AppController {
  constructor(
    @Inject('DATABASE_NAME') private dbname: string,
    @Inject('CRON_CONFIG') private cron: Record<string, any>,
  ) {
    console.log('Inside [UsersController]:');

    console.log('String value (Database name): ', this.dbname);
    console.log('Object value (Cron config): ', this.cron);
  }
}
