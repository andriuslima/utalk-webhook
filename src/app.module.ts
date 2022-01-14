import { Logger, Module } from '@nestjs/common';
import { EventsController } from './events.controller';

@Module({
  imports: [],
  controllers: [EventsController],
  providers: [Logger],
})
export class AppModule {}
