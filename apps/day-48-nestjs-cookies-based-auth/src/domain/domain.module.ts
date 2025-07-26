import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from '../database/db.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DBModule.forRoot({
      entities: [UserEntity],
    }),
    UserModule,
    AuthModule,
  ],

  controllers: [],
  providers: [],
})
export class DomainModule {}
