import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NarizForma } from './entities/nariz-forma.entity';
import { NarizFormaService } from './nariz-forma.service';
import { NarizFormaController } from './nariz-forma.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            NarizForma
        ])
      ],
    providers: [NarizFormaService],
    controllers: [NarizFormaController]
})
export class NarizFormaModule {}
