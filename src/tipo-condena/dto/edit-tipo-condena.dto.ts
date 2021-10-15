import { PartialType } from "@nestjs/swagger";
import { CreateTipoCondenaDto } from './create-tipo-condena.dto';

export class EditTipoCondenaDto extends PartialType(CreateTipoCondenaDto){}