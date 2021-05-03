import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Piel } from './entities/piel.entity';
import { PielService } from './piel.service';
import { PielController } from './piel.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Piel

        ])
      ],
    providers: [PielService],
    controllers: [PielController],

})
export class PielModule {}
