import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PabellonService } from './pabellon.service';
import { PabellonController } from './pabellon.controller';
import { Pabellon } from './entities/pabellon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Pabellon
    ])
  ],

  providers: [PabellonService],

  controllers: [PabellonController]
})
export class PabellonModule {}
