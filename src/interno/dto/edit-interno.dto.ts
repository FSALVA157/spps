import { PartialType } from "@nestjs/mapped-types";
import { CreateInternoDto } from './create-interno.dto';

export class EditInternoDto extends PartialType(CreateInternoDto){}