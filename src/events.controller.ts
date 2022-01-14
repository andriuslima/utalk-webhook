import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common';

@Controller()
export class EventsController {
  constructor(private readonly logger: Logger) {}

  @Post('/events')
  @HttpCode(201)
  proccessEvent(@Body() event: any): string {
    this.logger.log(
      { message: 'Event received', event },
      EventsController.name,
    );
    return 'Event processed!';
  }
}
