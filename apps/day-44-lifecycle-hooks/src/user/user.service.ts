import { forwardRef, Inject, Injectable } from '@nestjs/common';
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
  constructor(
    @Inject(forwardRef(() => ConfigService))
    private readonly config: ConfigService,
  ) {}
}
