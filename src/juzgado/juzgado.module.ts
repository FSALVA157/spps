import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Juzgado } from './entities/juzgado.entity';
import { JuzgadoService } from './juzgado.service';
import { JuzgadoController } from './juzgado.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Juzgado
        ])
      ],
    providers: [JuzgadoService],
    controllers: [JuzgadoController]
})
export class JuzgadoModule {}
