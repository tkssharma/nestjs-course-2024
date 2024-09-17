import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "./task.model";
import { CreateTaskDto } from "./task.dto";
import { AuthGuard } from "src/core/guards/auth.guard";

@Controller("/api/v1/tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @HttpCode(HttpStatus.OK)
  @Get()
  @UseGuards(AuthGuard)
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UseGuards(AuthGuard)
  async craeteTask(@Body() payload: CreateTaskDto) {
    return this.taskService.create(payload);
  }

  @Put(":id")
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async updateTask(
    @Param("id") id: number,
    @Body() payload: CreateTaskDto,
  ) {
    return this.taskService.updateTask(Number(id), payload);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  @UseGuards(AuthGuard)
  async deleteTask(
    @Param("id") id: number,
  ) {
    return this.taskService.deleteTask(Number(id));
  }
}
