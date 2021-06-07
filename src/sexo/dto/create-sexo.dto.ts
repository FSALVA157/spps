import{ Length, IsString, isNumber, IsNumber, IsOptional} from 'class-validator';


export class CreateSexoDto {
    @IsNumber()
    @IsOptional()
    id_sexo: number;
    
    @IsString()
    @Length(1,50,{message:'El sexo debe tener entre $constraint1 y $constraint2 caracteres'})
    sexo: string;
    

}