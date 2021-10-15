import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateMarcaCorporalDto {

    @IsInt()
    readonly prontuario: number;

    @IsInt()
    readonly tipo_id: number;

    @IsString()
    readonly detalle: string;

    @IsString()
    @IsOptional()
    readonly img: string;


}
