import { PartialType } from "@nestjs/swagger";
import { CreateInternoDto } from './create-interno.dto';

export class EditInternoDto extends PartialType(CreateInternoDto){}