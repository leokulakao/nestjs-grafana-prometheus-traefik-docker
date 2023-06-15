import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  PrometheusModule,
  makeCounterProvider,
  makeGaugeProvider,
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
    makeGaugeProvider({
      name: 'metric_test',
      help: 'metric_test_help',
      labelNames: ['henvio_count'],
    }),
  ],
})
export class AppModule {}
