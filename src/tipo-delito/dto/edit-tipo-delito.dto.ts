import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDelitoDto } from './create-tipo-delito.dto';

export class EditTipoDelitoDto extends PartialType(CreateTipoDelitoDto){}