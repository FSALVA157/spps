import{ Length, IsString} from 'class-validator';


export class CreateReingresoDto {
    
    @IsString()
    @Length(1,50,{message:'El Reingreso debe tener entre $constraint1 y $constraint2 caracteres'})
    reingreso: string;
    

}