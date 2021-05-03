import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oficio } from './entities/oficio.entity';
import { OficioService } from './oficio.service';
import { OficioController } from './oficio.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Oficio
        ])
      ],
    providers: [OficioService],
    controllers: [OficioController],

})
export class OficioModule {}
