import { Module } from '@nestjs/common';
import { PersonStore } from './person.store';
import { UsersStore } from './users.store';
import { UsersController } from '../users.controller';

// alias provider
@Module({
  controllers: [UsersController],
  providers: [
    UsersStore,

    // token name = `PersonStore` & dependency = `UsersStore` existing instance (above statement)
    { provide: PersonStore, useExisting: UsersStore },
  ],
})
export class AppModule {}
