import { Module } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { SexoController } from './sexo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sexo } from './entities/sexo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Sexo
    ])
  ],
  providers: [SexoService],
  controllers: [SexoController]
})
export class SexoModule {}
