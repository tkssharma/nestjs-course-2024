import { Module } from '@nestjs/common';
import { PersonStore, DATA_STORE_INJECTION_TOKEN } from './stores/person.store';
import { UsersStore } from './stores/users.store';
import { UsersController } from './user.controller';
// use class Providers
@Module({
  controllers: [UsersController],
  providers: [
    { provide: 'STORE', useClass: UsersStore },

    { provide: DATA_STORE_INJECTION_TOKEN, useClass: PersonStore },
  ],
})
export class DemoModule {}
