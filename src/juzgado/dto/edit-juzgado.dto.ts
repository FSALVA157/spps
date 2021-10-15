import { PartialType } from "@nestjs/swagger";
import { CreateJuzgadoDto } from './create-juzgado.dto';

export class EditJuzgadoDto extends PartialType(CreateJuzgadoDto){}