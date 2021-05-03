
import{ Length, IsString} from 'class-validator';


export class CreateJurisdiccionDto {
    
    @IsString()
    @Length(1,50,{message:'La Jurisdiccion debe tener entre $constraint1 y $constraint2 caracteres'})
    jurisdiccion: string;
    

}