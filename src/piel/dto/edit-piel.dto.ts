import { PartialType } from "@nestjs/swagger";
import { CreatePielDto } from './create-piel.dto';

export class EditPielDto extends PartialType(CreatePielDto){}