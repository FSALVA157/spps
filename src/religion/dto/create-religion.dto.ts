import{ Length, IsString} from 'class-validator';


export class CreateReligionDto {
    
    @IsString()
    @Length(1,50,{message:'La religion debe tener entre $constraint1 y $constraint2 caracteres'})
    religion: string;
    

}