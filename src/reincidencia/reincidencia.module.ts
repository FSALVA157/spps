import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reincidencia } from './entities/reincidencia.entity';
import { ReincidenciaService } from './reincidencia.service';
import { ReincidenciaController } from './reincidencia.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Reincidencia
        ])
      ],
    providers: [ReincidenciaService],
    controllers: [ReincidenciaController]
})
export class ReincidenciaModule {}
