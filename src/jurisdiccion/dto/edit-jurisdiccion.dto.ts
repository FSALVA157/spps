import { PartialType } from "@nestjs/swagger";
import { CreateJurisdiccionDto } from './create-jurisdiccion.dto';

export class EditJurisdiccionDto extends PartialType(CreateJurisdiccionDto){}