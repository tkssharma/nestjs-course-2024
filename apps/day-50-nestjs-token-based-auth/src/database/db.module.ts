import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DbConfig } from './db.interface';

@Module({})
export class DBModule {
  private static getConnectionOptions(
    config: ConfigService,
    dbconfig: DbConfig,
  ): TypeOrmModuleOptions {
    const databaseUrl = config.get('DATABASE_URL');
    return {
      type: 'postgres',
      // postgres://api:development_pass@localhost:5433/api-database
      url: databaseUrl,
      // FOR LOCAL AND PROD
      ssl:
        process.env.NODE_ENV !== 'local' && process.env.NODE_ENV !== 'test'
          ? { rejectUnauthorized: false }
          : false,
      entities: dbconfig.entities,
      synchronize: true,
      logging: true,
    };
  }

  public static forRoot(dbconfig: any): DynamicModule {
    return {
      module: DBModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) =>
            DBModule.getConnectionOptions(configService, dbconfig),
          inject: [ConfigService],
        }),
      ],
      controllers: [],
      providers: [],
      exports: [],
    };
  }
}
