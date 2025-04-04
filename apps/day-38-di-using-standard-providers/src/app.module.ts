import { Module } from '@nestjs/common';
import { UsersController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './part-2/user.module';

@Module({
  imports: [DemoModule],
  controllers: [UsersController],
  providers: [AppService],
})
export class AppModule {}
