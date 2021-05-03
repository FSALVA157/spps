import { Module } from '@nestjs/common';
import { InternoService } from './interno.service';
import { InternoController } from './interno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interno } from './entities/interno.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Interno
    ])
  ],

  providers: [InternoService],
  controllers: [InternoController]
})
export class InternoModule {}
