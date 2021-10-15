import { PartialType } from "@nestjs/swagger";
import { CreateEstadoCivilDto } from './create-estado-civil.dto';

export class EditEstadoCivilDto extends PartialType(CreateEstadoCivilDto){}