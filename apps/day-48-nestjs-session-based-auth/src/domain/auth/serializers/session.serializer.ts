import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../../../domain/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser(user: any, done: (err: any, id?: any) => void): void {
    done(null, user.id);
  }

  async deserializeUser(
    id: number,
    done: (err: any, user?: any) => void,
  ): Promise<void> {
    try {
      const user = await this.usersService.findById(id);
      done(null, user || null);
    } catch (error) {
      done(error);
    }
  }
}
