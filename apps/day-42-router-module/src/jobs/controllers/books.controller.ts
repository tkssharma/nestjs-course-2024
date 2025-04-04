import { Controller, Get } from '@nestjs/common';

// jobs/interviews
@Controller('/books')
export class BooksInterviewsController {
  @Get()
  requestHandler() {
    return 'Books interviews route';
  }
}
