import { Controller, Get } from '@nestjs/common';

@Controller('/courses')
export class CourseApplicationsController {
  @Get()
  requestHandler() {
    return 'course applications route';
  }
}
