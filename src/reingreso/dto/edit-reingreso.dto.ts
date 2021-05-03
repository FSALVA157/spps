import { PartialType } from '@nestjs/mapped-types';
import { CreateReingresoDto } from './create-reingreso.dto';


export class EditReingresoDto extends PartialType(CreateReingresoDto){}