import { PartialType } from '@nestjs/mapped-types';
import { CreateUnidadDto } from './create-unidad.dto';


export class EditUnidadDto extends PartialType(CreateUnidadDto){}