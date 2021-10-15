import { PartialType } from "@nestjs/swagger";
import { CreateReincidenciaDto } from './create-reincidencia.dto';

export class EditReincidenciaDto extends PartialType(CreateReincidenciaDto){}