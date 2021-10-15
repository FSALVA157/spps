import { PartialType } from "@nestjs/swagger";
import { CreateNarizTamanioDto } from './create-nariz-tamanio.dto';

export class EditNarizTamanioDto extends PartialType(CreateNarizTamanioDto){}