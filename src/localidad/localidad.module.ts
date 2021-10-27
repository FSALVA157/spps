import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Localidad } from './entities/localidad.entity';
import { LocalidadService } from './localidad.service';
import { LocalidadController } from './localidad.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Localidad
    ])
  ],
  providers: [LocalidadService],
  controllers: [LocalidadController]
})
export class LocalidadModule {}
