import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { USERS_ROUTES } from './jobs/users-routes';
import { ADMIN_ROUTES } from './jobs/admin-routes';

const ROUTES = [...USERS_ROUTES, ...ADMIN_ROUTES];

@Module({
  imports: [RouterModule.register(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
