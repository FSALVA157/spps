import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reingreso } from './entities/reingreso.entity';
import { ReingresoService } from './reingreso.service';
import { ReingresoController } from './reingreso.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Reingreso
        ])
      ],
    providers: [ReingresoService],
    controllers: [ReingresoController]

})
export class ReingresoModule {}
