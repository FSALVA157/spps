import { PartialType } from '@nestjs/mapped-types';
import { CreateNarizFormaDto } from './create-nariz-forma.dto';

export class EditNarizFormaDto extends PartialType(CreateNarizFormaDto){}