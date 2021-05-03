import{ Length, IsString} from 'class-validator';


export class CreateOjosTamanioDto {
    
    @IsString()
    @Length(1,50,{message:'El tamanio de ojos debe tener entre $constraint1 y $constraint2 caracteres'})
    ojos_tamanio: string;
}   