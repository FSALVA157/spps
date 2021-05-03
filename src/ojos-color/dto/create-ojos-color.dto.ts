import{ Length, IsString} from 'class-validator';


export class CreateOjosColorDto {
    
    @IsString()
    @Length(1,50,{message:'El Color de ojo debe tener entre $constraint1 y $constraint2 caracteres'})
    ojos_color: string;
    

}