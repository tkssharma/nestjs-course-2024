import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from './database/db.module';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './domain/user/entity/user.entity';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    DomainModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DBModule.forRoot({
      entities: [UserEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
