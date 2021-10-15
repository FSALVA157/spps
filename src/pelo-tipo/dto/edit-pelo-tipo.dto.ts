import { PartialType } from "@nestjs/swagger";
import { CreatePeloTipoDto } from './create-pelo-tipo.dto';

export class EditPeloTipoDto extends PartialType(CreatePeloTipoDto){}