import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// Code.
export enum Stage {
  PRODUCTION = 'production',
  STAGING = 'development',
  RC = 'rc',
  LOCAL = 'local',
}

@Injectable()
export class AppConfigService {
  constructor(private readonly config: ConfigService) {}

  public get nodeEnv() {
    return process.env.NODE_ENV || 'production';
  }

  public get port() {
    return process.env.PORT || Number(3000);
  }

  public get database() {
    return {
      databaseUrl: process.env.DATABASE_URL || this.config.get('DATABASE_URL'),
    };
  }
}
