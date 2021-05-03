import{ Length, IsString} from 'class-validator';


export class CreateUnidadDto {
    
    @IsString()
    @Length(1,50,{message:'La unidad debe tener entre $constraint1 y $constraint2 caracteres'})
    unidad: string;
    

}