import { PartialType } from "@nestjs/swagger";
import { CreateOficioDto } from './create-oficio.dto';


export class EditOficioDto extends PartialType(CreateOficioDto){}