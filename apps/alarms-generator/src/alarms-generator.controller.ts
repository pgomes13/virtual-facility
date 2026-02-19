import { Controller, Get } from '@nestjs/common';
import { AlarmsGeneratorService } from './alarms-generator.service';

@Controller()
export class AlarmsGeneratorController {
  constructor(
    private readonly alarmsGeneratorService: AlarmsGeneratorService,
  ) {}
}
