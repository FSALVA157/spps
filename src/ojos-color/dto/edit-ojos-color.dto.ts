import { PartialType } from '@nestjs/mapped-types';
import { CreateOjosColorDto } from './create-ojos-color.dto';

export class EditOjosColorDto extends PartialType(CreateOjosColorDto){}