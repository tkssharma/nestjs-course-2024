import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  @Get('me')
  async me(@Req() req) {
    return req.user;
  }

  @Get('session')
  @UseGuards(AuthenticatedGuard)
  getSession(@Req() req) {
    console.log('Session:', req.session);
    console.log('User:', req.user);
    return {
      isAuthenticated: req.isAuthenticated(),
      session: req.session,
      user: req.user,
    };
  }

  @Post('logout')
  logout(@Request() req) {
    req.session.destroy((err) => {
      if (err) {
        console.log('Error destroying session:', err);
      }
    });

    req.logout(() => {});

    return { message: 'The user has been successfully logged out.' };
  }
}
