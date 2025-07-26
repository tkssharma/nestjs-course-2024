import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit {
  private client: RedisClientType;

  constructor(private configService: ConfigService) {
    const redisUrl = this.configService.get<string>('REDIS_URL');
    this.client = createClient({ url: redisUrl });
    this.client.on('error', (err) => {
      console.error(err);
    });
  }

  async onModuleInit() {
    await this.client.connect();
    console.log('connected>>>>>>...');
  }

  getClient(): RedisClientType {
    return this.client;
  }
}
