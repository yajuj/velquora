import { Controller, Get, Inject } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller()
export class TelegramController {
  constructor(@Inject('EVENT_BUS') private readonly client: ClientProxy) {}

  @MessagePattern('ping')
  handlePing(msg: string): string {
    this.client.emit('pong_event', 'PONG');
    return 'PONG';
  }
}
