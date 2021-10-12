import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { CustomConfigModule } from './modules/custom-config/custom-config.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    CustomConfigModule,
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
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
