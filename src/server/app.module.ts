import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { CustomConfigModule } from './modules/custom-config/custom-config.module';
import { NextModule } from './modules/next/next.module';

@Module({
  imports: [
    CustomConfigModule,
    NextModule,
    RouterModule.register([{ path: '', module: NextModule }]),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          ttl: configService.get<number>('THROTTLER_TTL'),
          limit: configService.get<number>('THROTTLER_LIMIT'),
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
