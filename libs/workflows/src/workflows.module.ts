import { Module } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';

@Module({
  providers: [WorkflowsService],
  exports: [WorkflowsService],
})
export class WorkflowsModule {}
