import { Controller, Get, Inject } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class GatewayController {
  constructor(
    @Inject('GATEWAY_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get('ping')
  async getHello() {
    const result = this.client.send('ping', 'ping');
    return await firstValueFrom(result);
  }
}
