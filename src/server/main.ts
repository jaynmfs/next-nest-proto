import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as useragent from 'express-useragent';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT');
  const mode = configService.get<string>('NODE_ENV');

  app.enableCors({ origin: '*' });
  app.use(compression());
  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );
  app.use(useragent.express());

  const docsConfig = new DocumentBuilder()
    .setTitle(configService.get<string>('SERVICE_NAME'))
    .setDescription(configService.get<string>('SERVICE_DESCRIPTION'))
    .setVersion(configService.get<string>('SERVICE_PORT'))
    .build();
  const document = SwaggerModule.createDocument(app, docsConfig);
  SwaggerModule.setup(configService.get<string>('DOCS_PATH'), app, document);

  await app.listen(port, () =>
    console.log(`Listening on ${port} in ${mode}  mode`),
  );
}
bootstrap();
