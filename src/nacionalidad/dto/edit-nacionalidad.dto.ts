import { CreateNacionalidadDto } from './create-nacionalidad.dto';
import { PartialType } from "@nestjs/swagger";

export class EditNacionalidadDto extends PartialType(CreateNacionalidadDto) {}