import { PartialType } from "@nestjs/swagger";
import { CreateZonaResidenciaDto } from './create-zona-residencia.dto';

export class EditZonaResidenciaDto extends PartialType(CreateZonaResidenciaDto){
    
}