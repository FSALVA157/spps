import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCondena } from './entities/tipo-condena.entity';
import { TipoCondenaService } from './tipo-condena.service';
import { TipoCondenaController } from './tipo-condena.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TipoCondena
        ])
      ],
    providers: [TipoCondenaService],
    controllers: [TipoCondenaController]

})
export class TipoCondenaModule {}
