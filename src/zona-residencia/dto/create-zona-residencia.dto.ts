import { IsString, Length } from "class-validator";

export class CreateZonaResidenciaDto {
    @IsString()
    @Length(1,50,{message:'La zona de residencia debe tener entre 1 y 50 caracteres caracteres'})
    zona_residencia: string;

}