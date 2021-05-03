import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelEducacion } from './entities/nivel-educacion.entity';
import { NivelEducacionService } from './nivel-educacion.service';
import { NivelEducacionController } from './nivel-educacion.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            NivelEducacion
        ])
      ],
    providers: [NivelEducacionService],
    controllers: [NivelEducacionController]

})
export class NivelEducacionModule {}
