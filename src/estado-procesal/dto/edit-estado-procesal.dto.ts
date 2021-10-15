import { PartialType } from "@nestjs/swagger";
import { CreateEstadoProcesalDto } from './create-estado-procesal.dto';

export class EditEstadoProcesalDto extends PartialType(CreateEstadoProcesalDto){}