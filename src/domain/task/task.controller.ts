import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller("/api/v1/tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get("")
  getHello(): string {
    return this.taskService.getHello();
  }
}
