import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './app.dto';
import { AppService } from './app.service';

let USERS = [];

@Controller('/users')
export class UsersController {
  constructor(private readonly service: AppService) {}
  @Post()
  createUser() {
    return { message: 'User created' + this.service.getHello() };
  }
}
