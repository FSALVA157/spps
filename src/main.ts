import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //configuración de los pipes globales
  app.useGlobalPipes(
    new ValidationPipe({
     // Make sure that there's no unexpected data
     whitelist: true,
     forbidNonWhitelisted: true,
     forbidUnknownValues: true,

     /**
      * Detailed error messages since this is 4xx
      */
     disableErrorMessages: false,
     
     validationError: {
       /**
        * WARNING: Avoid exposing the values in the error output (could leak sensitive information)
        */
       value: false,
     },

     /**
      * Transform the JSON into a class instance when possible.
      * Depends on the type of the data on the controllers
      */
     transform: true,
    })
  );

  //configuración de la documentación
  const config = new DocumentBuilder()
  .setTitle('Servidor del Servicio Penitenciario de Salta')
  .setDescription('Descripción de la API S.P.P.S.')
  .setVersion('1.0')
  .addTag('spps')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(3000);
  const logger = new Logger();
  logger.log(`corriendo el servidor ${await app.getUrl()}`);
}
bootstrap();
