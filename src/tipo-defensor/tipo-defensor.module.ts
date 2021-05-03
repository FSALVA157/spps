import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDefensor } from './entities/tipo-defensor.entity';
import { TipoDefensorService } from './tipo-defensor.service';
import { TipoDefensorController } from './tipo-defensor.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TipoDefensor
        ])
      ],
    providers: [TipoDefensorService],
    controllers: [TipoDefensorController]

})
export class TipoDefensorModule {}
