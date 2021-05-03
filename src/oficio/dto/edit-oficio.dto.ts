import { PartialType } from '@nestjs/mapped-types';
import { CreateOficioDto } from './create-oficio.dto';


export class EditOficioDto extends PartialType(CreateOficioDto){}