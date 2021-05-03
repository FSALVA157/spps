import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NarizTamanio } from './entities/nariz-tamanio.entity';
import { NarizTamanioService } from './nariz-tamanio.service';
import { NarizTamanioController } from './nariz-tamanio.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            NarizTamanio
        ])
      ],
    providers: [NarizTamanioService],
    controllers: [NarizTamanioController]
})
export class NarizTamanioModule {}
