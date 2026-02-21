import { Module } from '@nestjs/common';
import { NatsClientProxy } from './nats-client.proxy';
import { NATS_BROKER } from './constants';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATS_BROKER,
        transport: Transport.NATS,
        options: {
          servers: process.env.NATS_URL,
        },
      },
    ]),
  ],
  providers: [NatsClientProxy],
  exports: [NatsClientProxy],
})
export class NatsClientModule {}
