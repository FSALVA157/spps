import { IsString, Length } from "class-validator";

export class CreateEstablecimientoProcedenciaDto {
    @IsString()
    @Length(1,50,{message:'El establecimiento de procedencia debe tener entre 1 y 50 caracteres'})
    establecimiento_procedencia: string; 
}