import { PartialType } from "@nestjs/swagger";
import { CreateReingresoDto } from './create-reingreso.dto';


export class EditReingresoDto extends PartialType(CreateReingresoDto){}