import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jurisdiccion } from './entities/jurisdiccion.entity';
import { JurisdiccionService } from './jurisdiccion.service';
import { JurisdiccionController } from './jurisdiccion.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Jurisdiccion
        ])
      ],
    providers: [JurisdiccionService],
    controllers: [JurisdiccionController]

})
export class JurisdiccionModule {}
