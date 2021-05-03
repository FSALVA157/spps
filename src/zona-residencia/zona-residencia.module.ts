import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZonaResidenciaService } from './zona-residencia.service';
import { ZonaResidencia } from './entities/zona-residencia.entity';
import { ZonaResidenciaController } from './zona-residencia.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        ZonaResidencia
    ])
  ],

  providers: [ZonaResidenciaService],

  controllers: [ZonaResidenciaController]
})
export class ZonaResidenciaModule {}
