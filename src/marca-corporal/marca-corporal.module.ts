import { Module } from '@nestjs/common';
import { MarcaCorporalController } from './marca-corporal.controller';
import { MarcaCorporalService } from './marca-corporal.service';


@Module({
  controllers: [MarcaCorporalController],
  providers: [MarcaCorporalService]
})
export class MarcaCorporalModule {}
