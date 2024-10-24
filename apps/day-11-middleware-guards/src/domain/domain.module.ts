import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { AuthMiddleware } from '../core/middleware/auth.middleware';
import { RouteInfo } from '@nestjs/common/interfaces';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import dbConfig from '../config/database';
import appConfig from '../config/app';
import kafkaConfig from '../config/kafka';

@Module({
  imports: [
    TaskModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig, appConfig, kafkaConfig],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DomainModule {
  public privateRouters: Array<RouteInfo> = [
    {
      path: '/api/v1/tasks',
      method: RequestMethod.ALL,
    },
    {
      path: '/api/v1/tasks/*',
      method: RequestMethod.ALL,
    },
  ];
  public publicRouter: Array<RouteInfo> = [
    {
      path: '/api/v1/users',
      method: RequestMethod.ALL,
    },
  ];

  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(...this.publicRouter)
      .forRoutes(...this.privateRouters);
  }
}
