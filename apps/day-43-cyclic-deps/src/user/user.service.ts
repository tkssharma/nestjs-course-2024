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
export class UserService {
  constructor(private readonly config: ConfigService) {}
}
