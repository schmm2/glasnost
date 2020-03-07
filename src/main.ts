import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const options = new DocumentBuilder()
  .setTitle("Glasnost API")
  .setDescription("Glast API Description")
  .setVersion("0.1")
  .addTag("")
  .build();
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api',app,document);

  await app.listen(3000);
}
bootstrap();
