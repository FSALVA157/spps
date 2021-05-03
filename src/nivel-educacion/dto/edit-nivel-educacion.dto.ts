import { PartialType } from '@nestjs/mapped-types';
import { CreateNivelEducacionDto } from './create-nivel-educacion.dto';

export class EditNivelEducacionDto extends PartialType(CreateNivelEducacionDto){}