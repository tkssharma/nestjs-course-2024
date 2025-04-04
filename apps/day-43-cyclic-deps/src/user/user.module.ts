// Package.
import { Global, Module } from '@nestjs/common';

// Internal.
import { Stage, UserService } from './user.service';
import { AppConfigModule } from '../config/config.module';

// Code.
@Global()
@Module({
  imports: [AppConfigModule],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
