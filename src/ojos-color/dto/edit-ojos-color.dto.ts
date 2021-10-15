import { PartialType } from "@nestjs/swagger";
import { CreateOjosColorDto } from './create-ojos-color.dto';

export class EditOjosColorDto extends PartialType(CreateOjosColorDto){}