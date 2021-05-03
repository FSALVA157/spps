import{ Length, IsString} from 'class-validator';


export class CreatePeloTipoDto {
    
    @IsString()
    @Length(1,50,{message:'El Tipo de Pelo debe tener entre $constraint1 y $constraint2 caracteres'})
    pelo_tipo: string;
    

}