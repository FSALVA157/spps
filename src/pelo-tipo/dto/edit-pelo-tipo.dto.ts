import { PartialType } from '@nestjs/mapped-types';
import { CreatePeloTipoDto } from './create-pelo-tipo.dto';

export class EditPeloTipoDto extends PartialType(CreatePeloTipoDto){}