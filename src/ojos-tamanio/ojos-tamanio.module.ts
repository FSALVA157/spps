import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OjosTamanio } from './entities/ojos-tamanio.entity';
import { OjosTamanioService } from './ojos-tamanio.service';
import { OjosTamanioController } from './ojos-tamanio.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            OjosTamanio
        ])
      ],
    providers: [OjosTamanioService],
    controllers: [OjosTamanioController]

})
export class OjosTamanioModule {}
