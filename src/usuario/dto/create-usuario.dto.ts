import{ Length, IsString, IsNumber, isEmail, IsEmail, IsOptional, IsEnum} from 'class-validator';
import { EnumToString } from 'src/helpers/enumToString';
import { UsuarioRole } from '../enums/usuario-role-enums';


export class CreateUsuarioDto {
    
    
    @IsEmail({},{message:'Verifique el formato del correo electronico'})
    @IsString()
    @Length(2,50,{message:'El Correo debe tener entre $constraint1 y $constraint2 caracteres'})
    correo: string;

    @IsString()
    @Length(6,60,{message:'La Clave debe tener entre $constraint1 y $constraint2 caracteres'})
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
    @IsOptional()
    foto: string;

    @IsNumber()
    unidad_id: number;
    
    @IsOptional()
    @IsEnum(UsuarioRole,{
        message: `No ha introducido un valor valido(${EnumToString(UsuarioRole)})`
    })    
    role: UsuarioRole; 
    

}