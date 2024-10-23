// Package.
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Internal.
import { Stage, AppConfigService } from './config.service';

// Code.
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath:
        process.env.STAGE === Stage.LOCAL ? ['.env.local'] : ['.env'],
    }),
  ],
  controllers: [],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
