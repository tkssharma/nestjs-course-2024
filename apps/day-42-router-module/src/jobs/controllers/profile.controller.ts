import { Controller, Get } from '@nestjs/common';

// jobs/
@Controller('/profile')
export class ProfileController {
  @Get()
  requestHandler() {
    return 'profile route';
  }
}
