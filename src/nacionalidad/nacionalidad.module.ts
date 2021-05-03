import { Module } from '@nestjs/common';
import { NacionalidadService } from './nacionalidad.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nacionalidad } from './entities/nacionalidad.entity';
import { NacionalidadController } from './nacionalidad.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
        Nacionalidad
    ])
  ],

  providers: [NacionalidadService],

  controllers: [NacionalidadController]
})
export class NacionalidadModule {}
