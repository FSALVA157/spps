import { PartialType } from "@nestjs/swagger";
import { CreatePeloColorDto } from './create-pelo-color.dto';

export class EditPeloColorDto extends PartialType(CreatePeloColorDto){}