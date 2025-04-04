import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { connect } from 'http2';

function createConnection(options = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: 'CONNECTED',
        options,
      });
    }, 5000);
  });
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (options: Record<string, any>) => {
        const connection = await createConnection(options);
        return connection;
      },
      inject: ['DB_OPTIONS'],
    },
    {
      provide: 'DB_OPTIONS',
      useValue: { url: 'localhost', user: 'admin', password: 'pwd' },
    },
  ],
  exports: [],
})
export class AppModule {}
