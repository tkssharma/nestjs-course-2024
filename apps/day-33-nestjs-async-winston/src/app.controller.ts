import { Controller, Get, Inject } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
// import { AppLoggerService } from './logger/logger.service';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Controller('/health')
export class AppController {
  constructor(
    private readonly health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @ApiOkResponse({ description: 'returns the health check ' })
  @ApiTags('health')
  @Get()
  @HealthCheck()
  getHello() {
    const tag = 'getHello -> AppController';
    // verbose(`${tag} controller method: %j`, 'healthCheck');
    this.logger.log('Doing HealthCheck...', 'AppController');
    this.logger.error('Doing HealthCheck...', 'AppController');
    this.logger.debug('Doing HealthCheck...', 'AppController');

    return this.health.check([async () => this.db.pingCheck('typeorm')]);
  }
}
