import { PartialType } from '@nestjs/mapped-types';
import { CreatePeloColorDto } from './create-pelo-color.dto';

export class EditPeloColorDto extends PartialType(CreatePeloColorDto){}