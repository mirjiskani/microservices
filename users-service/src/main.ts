import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP, // Transport.TCP
    options: {
      host: 'localhost',
      port: 3001,
    },
  });
  // await app.listen(process.env.PORT ?? 3000);
  await app.listen();
}
bootstrap();
