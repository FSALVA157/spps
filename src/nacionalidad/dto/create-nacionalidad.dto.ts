import { IsString, Length } from "class-validator";

export class CreateNacionalidadDto {
    @IsString()
    @Length(1,50,{message:'La nacionalidad debe tener entre 1 y 50'})
    nacionalidad: string;

}