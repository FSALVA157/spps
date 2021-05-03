import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etnia } from './entities/etnia.entity';
import { EtniaService } from './etnia.service';
import { EtniaController } from './etnia.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Etnia
        ])
      ],

  providers: [EtniaService],
  controllers: [EtniaController]

})
export class EtniaModule {}
