import { Injectable } from '@nestjs/common';

let instanceCount = 1;

@Injectable()
export class DIDemoStore {
  private instanceN: number;

  constructor() {
    this.instanceN = instanceCount++;
    console.log(`Users store init instance(${this.instanceN})`);
  }

  getStore() {
    return `I am DIDemoStore ${this.instanceN}`;
  }
}
