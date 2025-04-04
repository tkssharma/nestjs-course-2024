import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './part-3/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
