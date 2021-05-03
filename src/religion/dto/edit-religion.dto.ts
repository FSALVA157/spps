import { PartialType } from '@nestjs/mapped-types';
import { CreateReligionDto } from './create-religion.dto';

export class EditReligionDto extends PartialType(CreateReligionDto){}