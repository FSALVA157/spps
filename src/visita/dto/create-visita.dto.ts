import { IsBoolean, IsDateString, IsEnum, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { VisitaCabelloColor, VisitaCategoria, VisitaOjosColor, VisitaPiel } from "../enums/visita_enums";

export class CreateVisitaDto {

    @IsNumber()
    dni: number;

    @IsString()
    @Length(2,20,{message: 'El primer apellido es obligatorio y debe tener entre $constraint1 y $constraint2'})
    apellido_1: string;

    @IsString()
    @Length(2,20,{message: 'El segundo apellido debe tener entre $constraint1 y $constraint2'})
    @IsOptional()    
    apellido_2: string;

    @IsString()
    @Length(2,20,{message: 'El primer nombre es obligatorio y debe tener entre $constraint1 y $constraint2'})
    nombre_1: string;

    @IsString()
    @Length(2,20,{message: 'El segundo nombre debe tener entre $constraint1 y $constraint2'})
    @IsOptional()
    nombre_2: string;

    @IsString()
    @Length(2,20,{message: 'El tercer nombre debe tener entre $constraint1 y $constraint2'})
    @IsOptional()
    nombre_3: string;

    @IsNumber()
    sexo_id: number;

    @IsNumber()
    @IsOptional()
    estado_civil_id: number;    

    @IsString()
    @Length(7, 20,{message: 'El telefóno es un texto de $constraint1 a $constraint2 caracteres'})
    @IsOptional()
    telefono: string;

    @IsString()
    @Length(7, 20,{message: 'El telefóno es un texto de $constraint1 a $constraint2 caracteres'})
    @IsOptional()
    domicilio: string;

    @IsNumber()
    provincia_id: number;

    @IsNumber()
    departamento_id: number; 
    
    @IsNumber()
    nacionalidad_id: number;

    @IsDateString()
    @IsOptional()
    fecha_nacimiento: Date;  

    @IsEnum(VisitaCategoria, {
        message: "categoria: No ha introducido un valor válido"
    })
    @IsOptional()
    categoria: VisitaCategoria;

    @IsString()
    @IsOptional()
    padre: string;

    @IsNumber()
    @IsOptional()
    padre_dni: number;

    @IsString()
    @IsOptional()
    madre: string;

    @IsNumber()
    @IsOptional()
    madre_dni: number;

    @IsString()
    @IsOptional()
    tutor1: string;

    @IsNumber()
    @IsOptional()
    tutor1_dni: number;

    @IsString()
    @IsOptional()
    tutor2: string;

    @IsNumber()
    @IsOptional()
    tutor2_dni: number;

    @IsBoolean()
    @IsOptional()
    hijos_tiene: boolean;

    @IsNumber()
    @IsOptional()
    hijos_cantidad: number;

    @IsNumber()
    @IsOptional()
    altura: string;

    @IsEnum(VisitaPiel,{
        message: "piel: Ha ingresado un valor no válido"
    })
    @IsOptional()
    piel: VisitaPiel;

    @IsEnum(VisitaOjosColor,{
        message: "ojos color: Ha ingresado un valor no válido"
    })
   @IsOptional()
   ojos_color: VisitaOjosColor;

   @IsEnum(VisitaCabelloColor,{
    message: "cabello color: Ha ingresado un valor no válido"
    })
    @IsOptional()
    cabello_color: VisitaCabelloColor;
   

    @IsBoolean()
    @IsOptional()
    prohibida: boolean;

    @IsString()
    @IsOptional()
    prohibicion_disposicion: string;

    @IsString()
    @IsOptional()
    prohibicion_historial: string;

    @IsDateString()
    @IsOptional()
    prohibicion_inicio: Date;

    @IsDateString()
    @IsOptional()
    prohibicion_fin: Date;

    @IsString()
    @IsOptional()
    obs: string;

    @IsString()
    @Length(10,100,{message: "foto ruta: es un texto de hasta $constraint2 caracteres"})
    @IsOptional()
    foto_ruta: string;

    @IsString()
    @IsOptional()
    firma_ruta: string;

    @IsString()
    @IsOptional()
    pd_ruta: string;

    @IsString()
    @IsOptional()
    pi_ruta: string;

    @IsString()
    @IsOptional()
    id_ruta: string;

    @IsString()
    @IsOptional()
    ii_ruta: string;

    @IsBoolean()
    @IsOptional()
    codigo_rojo: boolean;

    @IsString()
    @IsOptional()
    detalle_codigo_rojo: string;

    @IsNumber()
    @IsOptional()
    dias: number;

    @IsBoolean()
    @IsOptional()
    restriccion: boolean;


}
