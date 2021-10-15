import { PartialType } from "@nestjs/swagger";
import { CreateNivelEducacionDto } from './create-nivel-educacion.dto';

export class EditNivelEducacionDto extends PartialType(CreateNivelEducacionDto){}