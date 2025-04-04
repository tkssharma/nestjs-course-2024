import { Module } from '@nestjs/common';
import { DIDemoStore } from './stores/demo.store';

@Module({
  controllers: [],
  providers: [
    // standard provider
    { provide: DIDemoStore, useClass: DIDemoStore },
  ],
  exports: [DIDemoStore],
})
export class DemoModule {}
