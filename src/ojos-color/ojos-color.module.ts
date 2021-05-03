import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OjosColor } from './entities/ojos-color.entity';
import { OjosColorService } from './ojos-color.service';
import { OjosColorController } from './ojos-color.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            OjosColor
        ])
      ],
    providers: [OjosColorService],
    controllers: [OjosColorController],

})
export class OjosColorModule {}
