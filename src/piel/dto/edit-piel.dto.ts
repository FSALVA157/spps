import { PartialType } from '@nestjs/mapped-types';
import { CreatePielDto } from './create-piel.dto';

export class EditPielDto extends PartialType(CreatePielDto){}