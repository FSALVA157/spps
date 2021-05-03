import{ Length, IsString} from 'class-validator';


export class CreateNarizFormaDto {
    
    @IsString()
    @Length(1,50,{message:'La Forma de la Nariz debe tener entre $constraint1 y $constraint2 caracteres'})
    nariz_forma: string;
    

}