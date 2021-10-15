import { PartialType } from "@nestjs/swagger";
import { CreateTipoDefensorDto } from './create-tipo-defensor.dto';

export class EditTipoDefensorDto extends PartialType(CreateTipoDefensorDto){}