import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoProcesal } from './entities/estado-procesal.entity';
import { EstadoProcesalService } from './estado-procesal.service';
import { EstadoProcesalController } from './estado-procesal.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EstadoProcesal
        ])
      ],
    providers: [EstadoProcesalService],
    controllers: [EstadoProcesalController]
})
export class EstadoProcesalModule {}
