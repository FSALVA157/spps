import{ Length, IsString} from 'class-validator';


export class CreateTipoDelitoDto {
    
    @IsString()
    @Length(1,50,{message:'El Tipo de Delito debe tener entre $constraint1 y $constraint2 caracteres'})
    tipo_delito: string;
    

}