import{ Length, IsString} from 'class-validator';


export class CreateOficioDto {
    
    @IsString()
    @Length(1,50,{message:'El oficio debe tener entre $constraint1 y $constraint2 caracteres'})
    oficio: string;
    

}