import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReligionService } from './religion.service';
import { Religion } from './entities/religion.entity';
import { ReligionController } from './religion.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Religion
    ])
  ],

  providers: [ReligionService],

  controllers: [ReligionController]
})
export class ReligionModule {}
