
import{ Length, IsString} from 'class-validator';


export class CreateEtniaDto {
    
    @IsString()
    @Length(1,50,{message:'La etnia debe tener entre $constraint1 y $constraint2 caracteres'})
    etnia: string;
    

}