import{ Length, IsString, IsNumber, isEmail, IsEmail} from 'class-validator';


export class CreateUsuarioDto {
    
    
    @IsEmail({},{message:'Verifique el formato del correo electronico'})
    @IsString()
    @Length(2,50,{message:'El Correo debe tener entre $constraint1 y $constraint2 caracteres'})
    correo: string;

    @IsString()
    @Length(6,50,{message:'La Clave debe tener entre $constraint1 y $constraint2 caracteres'})
    clave: string;

    @IsNumber()
    dni: number;

    @IsString()
    @Length(2,50,{message:'El Nombre debe tener entre $constraint1 y $constraint2 caracteres'})
    nombre: string;

    @IsString()
    @Length(2,50,{message:'El Apellido debe tener entre $constraint1 y $constraint2 caracteres'})
    apellido: string;

    @IsString()
    @Length(2,200,{message:'La Foto debe tener entre $constraint1 y $constraint2 caracteres'})
    foto: string;

    
    

}