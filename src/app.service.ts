import { Injectable } from '@nestjs/common';
import { Gauge } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class AppService {
  constructor(
    @InjectMetric('metric_test') public metricTestGauge: Gauge<string>,
  ) {}
  getHello(): string {
    const result = 'Hello World!';
    const number = this.getNumber();
    this.metricTestGauge.reset();
    this.metricTestGauge.labels({ henvio_count: `counter` }).inc(number);
    return result;
  }

  getNumber(): number {
    return Math.floor(Math.random() * 11);
  }
}
