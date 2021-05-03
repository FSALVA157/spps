import { PartialType } from '@nestjs/mapped-types';
import { CreateJuzgadoDto } from './create-juzgado.dto';

export class EditJuzgadoDto extends PartialType(CreateJuzgadoDto){}