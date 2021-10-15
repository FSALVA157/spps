import { PartialType } from "@nestjs/swagger";
import { CreateReligionDto } from './create-religion.dto';

export class EditReligionDto extends PartialType(CreateReligionDto){}