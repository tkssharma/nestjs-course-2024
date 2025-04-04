import { Module } from '@nestjs/common';
import { UsersController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [AppService],
})
export class AppModule {}
