import { PartialType } from '@nestjs/mapped-types';
import { CreateEtniaDto } from './create-etnia.dto';

export class EditEtniaDto extends PartialType(CreateEtniaDto){}