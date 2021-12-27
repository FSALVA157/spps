import { Module } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { VisitaController } from './visita.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visita } from './entities/visita.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Visita
    ])
  ],
  controllers: [VisitaController],
  providers: [VisitaService]
})
export class VisitaModule {}
