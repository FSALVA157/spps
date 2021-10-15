import { PartialType } from "@nestjs/swagger";
import { CreateNarizFormaDto } from './create-nariz-forma.dto';

export class EditNarizFormaDto extends PartialType(CreateNarizFormaDto){}