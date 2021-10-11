import { Injectable, OnModuleInit } from '@nestjs/common';
import next from 'next';
import NextServer from 'next/dist/server/next-server';

@Injectable()
export class NextService implements OnModuleInit {
  private server: Partial<NextServer>;

  async onModuleInit(): Promise<void> {
    const env = String(process.env.NODE_ENV || 'development');
    const dev = env === 'development';
    try {
      this.server = next({ dev, dir: './src/client' });
      await this.server.prepare();
    } catch (err) {
      console.error(err);
    }
  }

  getNextServer(): Partial<NextServer> {
    return this.server;
  }
}
