import { Injectable, Scope } from '@nestjs/common';

let instanceCount = 0;
@Injectable({ scope: Scope.REQUEST })
export class UsersStore {
  constructor() {
    instanceCount++;
    console.log(`UsersStore init (instance ${instanceCount})`);
  }

  getStore() {
    return `I am UsersStore (instance ${instanceCount})`;
  }
}
