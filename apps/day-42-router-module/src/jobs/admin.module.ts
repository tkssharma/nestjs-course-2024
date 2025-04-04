import { Module } from '@nestjs/common';
import { AdminController } from './controllers/admin.controller';

@Module({
  controllers: [AdminController],
})
export class AdminModule {}
