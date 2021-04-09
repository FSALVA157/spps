import { Module } from '@nestjs/common';
import { EstadoCivilService } from './estado-civil.service';
import { EstadoCivilController } from './estado-civil.controller';
import { EstadoCivil } from './entities/estado-civil.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EstadoCivil
        ])
      ],

  providers: [EstadoCivilService],
  controllers: [EstadoCivilController]
})
export class EstadoCivilModule {}
