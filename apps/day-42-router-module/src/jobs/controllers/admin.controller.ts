import { Controller, Get } from '@nestjs/common';

// jobs/interviews
@Controller('/admin')
export class AdminController {
  @Get()
  requestHandler() {
    return 'admin route';
  }
}
