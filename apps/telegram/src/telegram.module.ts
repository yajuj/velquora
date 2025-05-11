import { Module } from '@nestjs/common';
import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EVENT_BUS',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://queue:5672'],
          queue: 'pong_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [TelegramController],
  providers: [TelegramService],
})
export class TelegramModule {}
