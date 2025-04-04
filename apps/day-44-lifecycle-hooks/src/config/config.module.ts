// Package.
import { forwardRef, Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Internal.
import { Stage, AppConfigService } from './config.service';
import { UserModule } from 'src/user/user.module';

// Code.
@Global()
@Module({
  imports: [
    forwardRef(() => UserModule),
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
