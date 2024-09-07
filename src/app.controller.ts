import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("/api/v1/user")
export class AppController {
  constructor(private readonly appService: AppService) {}

  // /app HTTP GET
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // /app/helo HTTP GET
  @Get("/hello")
  getHelloGreetings(): string {
    return this.appService.getHello();
  }

  @Get("/message")
  getMesage(): string {
    return this.appService.getHello();
  }
}
