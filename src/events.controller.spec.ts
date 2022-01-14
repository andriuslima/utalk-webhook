import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { EventsController } from './events.controller';

describe('EventsController', () => {
  let eventsController: EventsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [Logger],
    }).compile();

    eventsController = app.get<EventsController>(EventsController);
  });

  describe('root', () => {
    it('should return "Event proccessed!"', () => {
      expect(eventsController.proccessEvent({})).toBe('Event processed!');
    });
  });
});
