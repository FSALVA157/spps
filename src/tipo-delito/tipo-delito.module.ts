import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDelito } from './entities/tipo-delito.entity';
import { TipoDelitoService } from './tipo-delito.service';
import { TipoDelitoController } from './tipo-delito.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TipoDelito
        ])
      ],
    providers: [TipoDelitoService],
    controllers: [TipoDelitoController]
})
export class TipoDelitoModule {}
