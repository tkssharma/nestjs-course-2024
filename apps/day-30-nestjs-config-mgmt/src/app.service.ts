import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly configs: AppConfigService) {}
  getHello(): string {
    return 'Hello World!' + this.configs.database.databaseUrl;
  }
}
