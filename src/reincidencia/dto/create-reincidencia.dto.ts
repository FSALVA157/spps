import{ Length, IsString} from 'class-validator';


export class CreateReincidenciaDto {
    
    @IsString()
    @Length(1,50,{message:'La Reincidencia debe tener entre $constraint1 y $constraint2 caracteres'})
    reincidencia: string;
    

}