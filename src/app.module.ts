import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  PrometheusModule,
  makeCounterProvider,
} from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    PrometheusModule.register({
      path: '/mymetrics',
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    makeCounterProvider({
      name: 'metric_test',
      help: 'metric_test_help',
    }),
  ],
})
export class AppModule {}
