import { Module } from '@nestjs/common';
import { CustomConfigModule } from './modules/custom-config/custom-config.module';

@Module({
  imports: [CustomConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
