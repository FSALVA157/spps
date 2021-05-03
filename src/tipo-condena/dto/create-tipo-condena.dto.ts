import{ Length, IsString} from 'class-validator';


export class CreateTipoCondenaDto {
    
    @IsString()
    @Length(1,50,{message:'El Tipo de Condena debe tener entre $constraint1 y $constraint2 caracteres'})
    tipo_condena: string;
    

}