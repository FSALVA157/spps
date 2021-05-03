import{ Length, IsString} from 'class-validator';


export class CreateTipoDefensorDto {
    
    @IsString()
    @Length(1,50,{message:'El Tipo de Defensor debe tener entre $constraint1 y $constraint2 caracteres'})
    tipo_defensor: string;
    

}