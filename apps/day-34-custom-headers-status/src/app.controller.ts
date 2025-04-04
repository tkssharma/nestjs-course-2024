import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('headers')
  getHeaders(@Headers() headers: Record<string, any>) {
    console.log(headers);
    return headers;
  }

  @Get('headers-test')
  extractHeaders(
    @Headers() headers: Record<string, any>,
    @Headers('Cache-Control') cacheControl: string,
  ) {
    console.log(headers);
    return headers;
  }

  // @Example 2: Extract `User-Agent` header from Headers Object
  @Get('runtime')
  getRuntime(@Headers('User-Agent') ua: string) {
    console.log(ua);
    return { runtime: ua };
  }

  // @Example 3: Extract multiple headers from Headers Object
  @Get('multi-headers')
  getRuntimeAndCache(
    @Headers('x-api-key') key: string,
    @Headers('origin') origin: string,
    @Headers('x-api-token') token: string,
    @Headers('User-Agent') ua: string,
    @Headers('Cache-Control') cache: string,
  ) {
    return { runtime: ua, cacheControl: cache };
  }
}
