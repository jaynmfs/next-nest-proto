import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT');
  const mode = configService.get<string>('NODE_ENV');

  await app.listen(port, () =>
    console.log(`Listening on ${port} in ${mode}  mode`),
  );
}
bootstrap();
