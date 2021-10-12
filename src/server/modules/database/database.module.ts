import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomConfigModule } from '../custom-config/custom-config.module';
import { CustomConfigService } from '../custom-config/custom-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [CustomConfigModule],
      useFactory: (configService: CustomConfigService) => {
        return {
          type: 'mysql',
          ...configService.mysql(),
          // ? below for old version practice
          // entities: [__dirname + '/**/*.entity{.ts,.js}'],
          autoLoadEntities: true,
        };
      },
      inject: [CustomConfigService],
    }),
  ],
})
export class DatabaseModule {}
