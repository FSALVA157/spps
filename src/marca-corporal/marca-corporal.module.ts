import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaCorporalController } from './marca-corporal.controller';
import { MarcaCorporalService } from './marca-corporal.service';
import { MarcaCorporal } from './entities/marca-corporal.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([
        MarcaCorporal
    ])
  ],
  controllers: [MarcaCorporalController],
  providers: [MarcaCorporalService]
})
export class MarcaCorporalModule {}
