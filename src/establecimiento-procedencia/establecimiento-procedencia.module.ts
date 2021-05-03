import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablecimientoProcedencia } from './entities/establecimiento-procedencia.entity';
import { EstablecimientoProcedenciaService } from './establecimiento-procedencia.service';
import { EstablecimientoProcedenciaController } from './establecimiento-procedencia.controller';

@Module({

  imports: [
    TypeOrmModule.forFeature([
        EstablecimientoProcedencia
    ])
  ],
  providers: [EstablecimientoProcedenciaService],
  controllers: [EstablecimientoProcedenciaController]
})
export class EstablecimientoProcedenciaModule {}
