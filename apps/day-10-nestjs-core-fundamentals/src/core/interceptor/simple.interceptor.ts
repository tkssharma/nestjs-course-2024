import {
  CallHandler,
  NestInterceptor,
  Injectable,
  ExecutionContext,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TaskInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const ctx = context.switchToHttp();
    const requestBody = ctx.getRequest()!.body as {
      name: string;
      age: number;
    };
    requestBody.name = requestBody.name.toUpperCase();
    return next.handle().pipe(tap(() => {}));
  }
}
