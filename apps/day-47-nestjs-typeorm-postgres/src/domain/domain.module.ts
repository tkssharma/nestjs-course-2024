import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Task } from './task/task.entity';
import { User } from './user/user.entity';
import { TasksModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Change to 'mysql' or 'sqlite' if needed
      logging: true,
      url: `postgres://api:development_pass@localhost:5430/test-api`,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Auto sync (use false in production)
    }),
    UserModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class DomainModule {}
