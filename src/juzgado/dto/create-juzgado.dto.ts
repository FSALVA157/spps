
import{ Length, IsString} from 'class-validator';


export class CreateJuzgadoDto {
    
    @IsString()
    @Length(1,50,{message:'LEl Juzgado debe tener entre $constraint1 y $constraint2 caracteres'})
    juzgado: string;
    

}