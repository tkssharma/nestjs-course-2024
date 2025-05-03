import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from './database/db.module';
import { AuthModule } from './domain/auth/auth.module';
import { User } from './domain/user/user.entity';
import { UsersModule } from './domain/user/user.module';
import { RedisModule } from './redis/redis.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticatedGuard } from './domain/auth/guards/authenticated.guard';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DBModule.forRoot({
      entities: [User],
    }),
    RedisModule,
    PassportModule.register({ session: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
