import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices/enums/transport.enum';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP, // Transport.TCP
    options: {
      host: 'localhost',
      port: 3002,
    },
  });
  await app.listen();
}
bootstrap();
