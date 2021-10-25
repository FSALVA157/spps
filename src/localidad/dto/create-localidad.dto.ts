import { IsNumber, IsString } from "class-validator";

export class CreateLocalidadDto {

    @IsString()
    localidad: string;

    @IsNumber()
    departamento_id: number;
}
