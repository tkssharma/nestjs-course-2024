import { Injectable } from '@nestjs/common';
import { DIDemoStore } from './part-1/stores/demo.store';

@Injectable()
export class AppService {
  constructor() {}
  getHello(): string {
    return 'Hello World!';
  }
}
