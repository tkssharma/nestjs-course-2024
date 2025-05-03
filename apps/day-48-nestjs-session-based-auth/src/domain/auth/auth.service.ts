import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';

import { UsersService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findByEmail(username);

    if (!user) return null;

    const passwordsMatched = await compare(password, user.password);
    if (passwordsMatched) {
      delete user.password;
      return user;
    }

    return null;
  }
}
