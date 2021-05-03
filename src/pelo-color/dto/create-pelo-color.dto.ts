import{ Length, IsString} from 'class-validator';


export class CreatePeloColorDto {
    
    @IsString()
    @Length(1,50,{message:'El Color de Pelo debe tener entre $constraint1 y $constraint2 caracteres'})
    pelo_color: string;
    

}