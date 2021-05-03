import { PartialType } from '@nestjs/mapped-types';
import { CreateEstablecimientoProcedenciaDto } from './create-establecimiento-procedencia.dto';

export class EditEstablecimientoProcedenciaDto extends PartialType(CreateEstablecimientoProcedenciaDto) {


}