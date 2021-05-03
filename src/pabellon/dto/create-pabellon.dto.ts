import{ Length, IsString} from 'class-validator';


export class CreatePabellonDto {
    
    @IsString()
    @Length(1,50,{message:'El Pabellon debe tener entre $constraint1 y $constraint2 caracteres'})
    pabellon: string;
    

}