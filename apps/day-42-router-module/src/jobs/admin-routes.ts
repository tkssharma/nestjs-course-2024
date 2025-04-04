import { AdminModule } from './admin.module';
import { UserModule } from './user.module';

export const ADMIN_ROUTES = [
  {
    path: 'admin',
    module: AdminModule,
  },
];
