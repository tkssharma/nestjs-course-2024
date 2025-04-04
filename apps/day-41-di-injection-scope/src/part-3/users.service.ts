import { Injectable, Scope } from '@nestjs/common';

let instanceCount = 0;

@Injectable({ scope: Scope.TRANSIENT })
// 2 instance shared
// with TRANSIENT
// all controller will get their own instance
export class UsersStore {
  constructor() {
    instanceCount++;
    console.log(`UsersStore init (instance ${instanceCount})`);
  }

  getStore() {
    return `I am UsersStore (instance ${instanceCount})`;
  }
}
