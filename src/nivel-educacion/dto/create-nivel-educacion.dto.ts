import{ Length, IsString} from 'class-validator';


export class CreateNivelEducacionDto {
    
    @IsString()
    @Length(1,50,{message:'El nivel de educacion debe tener entre $constraint1 y $constraint2 caracteres'})
    nivel_educacion: string;    

}