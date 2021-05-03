
import{ Length, IsString} from 'class-validator';


export class CreateEstadoProcesalDto {
    
    @IsString()
    @Length(1,50,{message:'El Estado Procesal debe tener entre $constraint1 y $constraint2 caracteres'})
    estado_procesal: string;
    

}