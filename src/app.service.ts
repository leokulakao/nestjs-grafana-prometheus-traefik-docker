import { Injectable } from '@nestjs/common';
import { Gauge } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class AppService {
  constructor(@InjectMetric('metric_test') public gauge: Gauge<string>) {}
  getHello(): string {
    const result = 'Hello World!';
    return result;
  }
}
