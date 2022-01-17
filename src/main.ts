import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './app.module';
import * as winston from 'winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({
          format: winston.format.combine(
            winston.format.timestamp({
              format: 'DD-MM-YYYY HH:mm:ss'
            }),
            winston.format.json(),
          ),
          filename: 'logs/app.log',
        }),
      ],
    }),
  });
  const port = process.env.UTALK_WEBHOOK_PORT || 3000;
  await app.listen(port);
}
bootstrap();
