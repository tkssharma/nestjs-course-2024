import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Task } from './task/task.entity';
import { User } from './user/user.entity';
import { TasksModule } from './task/task.module';

@Module({
  imports: [UserModule, TasksModule],
  controllers: [],
  providers: [],
})
export class DomainModule {}
