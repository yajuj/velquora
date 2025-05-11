import { RmqService } from '@app/common/rmq/rmq.service';
import { NestFactory } from '@nestjs/core';
import { TelegramModule } from './telegram.module';

async function bootstrap() {
  const app = await NestFactory.create(TelegramModule);

  app.connectMicroservice(app.get(RmqService).getOptions(''));

  app.startAllMicroservices();
}
bootstrap();
RmqService;
