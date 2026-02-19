import { Test, TestingModule } from '@nestjs/testing';
import { AlarmsGeneratorController } from './alarms-generator.controller';
import { AlarmsGeneratorService } from './alarms-generator.service';

describe('AlarmsGeneratorController', () => {
  let alarmsGeneratorController: AlarmsGeneratorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AlarmsGeneratorController],
      providers: [AlarmsGeneratorService],
    }).compile();

    alarmsGeneratorController = app.get<AlarmsGeneratorController>(AlarmsGeneratorController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(alarmsGeneratorController.getHello()).toBe('Hello World!');
    });
  });
});
