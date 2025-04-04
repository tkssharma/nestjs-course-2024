import { Controller } from '@nestjs/common';
import { UsersStore } from './users.service';

@Controller('students')
export class StudentsController {
  constructor(private store: UsersStore) {
    // same instance 1
    console.log('Inside [StudentsController]');
    console.log(this.store.getStore());
  }
}
