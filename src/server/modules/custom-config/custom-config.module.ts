import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { customConfigSchema } from './custom-config.schema';
import { CustomConfigService } from './custom-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.join(
        __dirname,
        `../../../env/.env.${process.env.NODE_ENV || 'development'}`,
      ),
      validationSchema: customConfigSchema,
      isGlobal: true,
    }),
  ],
  providers: [CustomConfigService],
  exports: [CustomConfigService],
})
export class CustomConfigModule {}
