import { Module } from "@nestjs/common";
import { TaskModule } from "../task/task.module";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
  imports: [TaskModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
