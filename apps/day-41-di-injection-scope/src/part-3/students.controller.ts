import { Controller } from '@nestjs/common';
import { UsersStore } from './users.service';

@Controller('students')
export class StudentsController {
  constructor(private store: UsersStore) {
    console.log('Inside [StudentsController]');
    console.log(this.store.getStore());
  }
}
