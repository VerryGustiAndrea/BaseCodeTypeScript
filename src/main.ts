import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();
  if (process.env.SHOW_SWAGGER_API === 'true') {
    const options = new DocumentBuilder()
      .setTitle('Starworks Loyality API')
      .setDescription('Starworks Loyality development API')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }


  await app.listen(process.env.APP_PORT);
}
bootstrap();
