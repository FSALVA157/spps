import{ Length, IsString} from 'class-validator';


export class CreatePielDto {
    
    @IsString()
    @Length(1,50,{message:'La Piel debe tener entre $constraint1 y $constraint2 caracteres'})
    piel: string;
    

}