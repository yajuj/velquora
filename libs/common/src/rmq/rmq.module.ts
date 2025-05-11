import { Module } from '@nestjs/common';
import { RmqService } from './rmq.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {}
