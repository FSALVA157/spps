import { PartialType } from "@nestjs/swagger";
import { CreateEtniaDto } from './create-etnia.dto';

export class EditEtniaDto extends PartialType(CreateEtniaDto){}