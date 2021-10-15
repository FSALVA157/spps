import { PartialType } from "@nestjs/swagger";
import { CreateProvinciaDto } from './create-provincia.dto';

export class EditProvinciaDto extends PartialType(CreateProvinciaDto){}