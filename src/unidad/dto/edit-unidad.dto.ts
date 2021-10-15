import { PartialType } from "@nestjs/swagger";
import { CreateUnidadDto } from './create-unidad.dto';


export class EditUnidadDto extends PartialType(CreateUnidadDto){}