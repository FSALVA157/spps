import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeloColor } from './entities/pelo-color.entity';
import { PeloColorService } from './pelo-color.service';
import { PeloColorController } from './pelo-color.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PeloColor
        ])
      ],
    providers: [PeloColorService],
    controllers: [PeloColorController]

})
export class PeloColorModule {}
