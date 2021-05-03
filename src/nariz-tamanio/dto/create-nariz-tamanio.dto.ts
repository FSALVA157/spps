import{ Length, IsString} from 'class-validator';


export class CreateNarizTamanioDto {
    
    @IsString()
    @Length(1,50,{message:'El tamanio de nariz debe tener entre $constraint1 y $constraint2 caracteres'})
    nariz_tamanio: string;
    

}