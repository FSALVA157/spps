import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDefensorDto } from './create-tipo-defensor.dto';

export class EditTipoDefensorDto extends PartialType(CreateTipoDefensorDto){}