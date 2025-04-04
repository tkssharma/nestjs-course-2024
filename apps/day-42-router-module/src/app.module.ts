import { Module } from '@nestjs/common';

import { UserModule } from './jobs/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './jobs/admin.module';

@Module({
  imports: [UserModule, AdminModule, AppRoutingModule],
})
export class AppModule {}
