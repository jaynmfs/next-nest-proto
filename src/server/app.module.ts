import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CustomConfigModule } from './modules/custom-config/custom-config.module';
import { NextModule } from './modules/next/next.module';

@Module({
  imports: [
    CustomConfigModule,
    NextModule,
    RouterModule.register([{ path: '', module: NextModule }]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
