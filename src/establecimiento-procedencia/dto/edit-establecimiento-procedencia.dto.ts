import { PartialType } from "@nestjs/swagger";
import { CreateEstablecimientoProcedenciaDto } from './create-establecimiento-procedencia.dto';

export class EditEstablecimientoProcedenciaDto extends PartialType(CreateEstablecimientoProcedenciaDto) {


}