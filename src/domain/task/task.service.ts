import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
  getHello(): string {
    return "Hello World!";
  }
}
