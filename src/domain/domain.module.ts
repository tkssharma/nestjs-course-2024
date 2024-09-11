import { Module } from "@nestjs/common";
import { TaskModule } from "./task/task.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [TaskModule, UserModule],
  controllers: [],
  providers: [],
})
export class DomainModule {}
