import { PartialType } from "@nestjs/swagger";
import { CreateTipoDelitoDto } from './create-tipo-delito.dto';

export class EditTipoDelitoDto extends PartialType(CreateTipoDelitoDto){}