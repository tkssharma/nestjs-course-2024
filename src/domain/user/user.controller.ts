import { Controller, Get, Post } from "@nestjs/common";
import { TaskService } from "../task/task.service";

@Controller("/api/v1/users")
export class UserController {
  constructor(private readonly taskService: TaskService) { }

  @Get("/")
  getHello(): string {
    return this.taskService.getHello();
  }


  @Post('/')
  getHelloMsg(): string {
    return this.taskService.getHello();
  }
}
