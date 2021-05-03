import { PartialType } from '@nestjs/mapped-types';
import { CreateNarizTamanioDto } from './create-nariz-tamanio.dto';

export class EditNarizTamanioDto extends PartialType(CreateNarizTamanioDto){}