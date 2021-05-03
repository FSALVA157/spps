import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoCondenaDto } from './create-tipo-condena.dto';

export class EditTipoCondenaDto extends PartialType(CreateTipoCondenaDto){}