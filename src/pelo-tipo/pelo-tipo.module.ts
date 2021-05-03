import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeloTipo } from './entities/pelo-tipo.entity';
import { PeloTipoService } from './pelo-tipo.service';
import { PeloTipoController } from './pelo-tipo.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PeloTipo
        ])
      ],
    providers: [PeloTipoService],
    controllers: [PeloTipoController]
})
export class PeloTipoModule {}
