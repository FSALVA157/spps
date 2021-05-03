import { PartialType } from '@nestjs/mapped-types';
import { CreateReincidenciaDto } from './create-reincidencia.dto';

export class EditReincidenciaDto extends PartialType(CreateReincidenciaDto){}