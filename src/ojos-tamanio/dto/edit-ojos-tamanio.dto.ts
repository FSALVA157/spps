import { PartialType } from "@nestjs/swagger";
import { CreateOjosTamanioDto } from './create-ojos-tamanio.dto';

export class EditOjosTamanioDto extends PartialType(CreateOjosTamanioDto){}