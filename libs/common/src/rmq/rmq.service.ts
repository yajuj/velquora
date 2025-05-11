import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {
  constructor(private readonly configService: ConfigService) {}
  getOptions(queue: string): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.getOrThrow<string>('RABBIT_MQ_URL')],
        queue: this.configService.getOrThrow<string>(
          `RABBIT_MQ_${queue}_QUEUE`,
        ),
      },
    };
  }
}
