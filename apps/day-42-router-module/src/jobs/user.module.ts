import { Module } from '@nestjs/common';
import { CourseApplicationsController } from './controllers/course.controller';
import { BooksInterviewsController } from './controllers/books.controller';
import { ProfileController } from './controllers/profile.controller';

@Module({
  controllers: [
    BooksInterviewsController,
    CourseApplicationsController,
    ProfileController,
  ],
})
export class UserModule {}
