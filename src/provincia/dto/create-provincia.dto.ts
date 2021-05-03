import{ Length, IsString} from 'class-validator';


export class CreateProvinciaDto {
    
    @IsString()
    @Length(1,50,{message:'La Provincia debe tener entre $constraint1 y $constraint2 caracteres'})
    provincia: string;
    

}