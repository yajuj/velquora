import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { config } from 'process';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.register({
      clients: [
        {
          name: 'GATEWAY_SERVICE',
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://queue:5672'],
            queue: 'ping_queue',
            queueOptions: { durable: true },
          },
        },
      ],
    }),

    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
