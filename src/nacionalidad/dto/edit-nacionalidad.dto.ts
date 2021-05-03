import { CreateNacionalidadDto } from './create-nacionalidad.dto';
import { PartialType } from '@nestjs/mapped-types';

export class EditNacionalidadDto extends PartialType(CreateNacionalidadDto) {}