import { Injectable, Scope } from '@nestjs/common';

let instanceCount = 0;

// default scope
// is singelton

@Injectable({})
// @Injectable({ scope: Scope.DEFAULT })
export class UsersStore {
  constructor() {
    instanceCount++;
    console.log(`UsersStore init (instance ${instanceCount})`);
  }
  getStore() {
    return `I am UsersStore (instance ${instanceCount})`;
  }
}
