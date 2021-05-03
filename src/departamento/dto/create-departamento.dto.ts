
import{ Length, IsString, IsNumber} from 'class-validator';


export class CreateDepartamentoDto {
    
    @IsString()
    @Length(1,50,{message:'El Departamento debe tener entre $constraint1 y $constraint2 caracteres'})
    departamento: string;

    @IsNumber()
    provincia_id: number;
    

}