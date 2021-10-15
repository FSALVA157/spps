import { PartialType } from "@nestjs/swagger";
import { CreateDepartamentoDto } from './create-departamento.dto';

export class EditDepartamentoDto extends PartialType(CreateDepartamentoDto){}