import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Localidad } from './entities/localidad.entity';
import { LocalidadService } from './localidad.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Localidad
    ])
  ],
  providers: [LocalidadService]
})
export class LocalidadModule {}
