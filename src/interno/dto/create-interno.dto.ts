import{ Length, IsString, IsInt, isInt, IsDate, IsNumber, IsDateString, IsOptional} from 'class-validator';


export class CreateInternoDto {
    
        
    @IsInt()
    prontuario: number;

    @IsString()
    @Length(2,20,{message:'El Apellido debe tener entre 2 a 20 caracteres'})
    apellido_1: string;

    @IsString()
    @Length(2,20,{message:'El Segundo Apellido debe tener entre 2 a 20 caracteres'})
    apellido_2: string;

    @IsString()
    @Length(2,20,{message:'El Primer Nombre debe tener entre 2 a 20 caracteres'})
    nombre_1: string;

    @IsString()
    @Length(2,20,{message:'El Segundo nombre debe tener entre 2 a 20 caracteres'})
    nombre_2: string;

    @IsString()
    @Length(2,20,{message:'El Tercer Nombre debe tener entre 2 a 20 caracteres'})
    nombre_3: string;
    
    @IsString()
    @Length(2,50,{message:'El Alias debe tener entre 2 a 20 caracteres'})
    alias: string;

    @IsInt()
    dni: number;    

    @IsNumber()
    sexo_id: number;

    @IsNumber()
    estado_civil_id: number;

    @IsString()
    @Length(2,50,{message:'El Telefono debe tener entre 2 a 50 caracteres'})
    telefono: string;

    @IsString()
    @Length(2,50,{message:'El Domicilio debe tener entre 2 a 50 caracteres'})
    domicilio: string;

    @IsNumber()
    provincia_id

    @IsNumber()
    departamento_id: number; 

    @IsNumber()
    zona_residencia_id: number;

    @IsNumber()
    nacionalidad_id: number;

    @IsNumber()
    departamento_nacimiento_id: number;

    @IsDateString()
    fecha_nacimiento: Date;  

    @IsString()
    @Length(2,50,{message:'El Lugar de Nacimiento debe tener entre 2 a 50 caracteres'})
    lugar_nacimiento: string;

    @IsString()
    @Length(2,50,{message:'El Padre debe tener entre 2 a 50 caracteres'})
    padre: string;

    @IsString()
    @Length(2,50,{message:'La Madre debe tener entre 2 a 50 caracteres'})
    madre: string;

    @IsString()
    @Length(2,150,{message:'El campo Parientes debe tener entre 2 a 150 caracteres'})
    parientes: string;

    @IsString()
    @Length(2,150,{message:'El Referente de Emergencia debe tener entre 2 a 150 caracteres'})
    referente_emergencia: string;

    @IsNumber()
    nivel_educacion_id: number;

    @IsString()
    @Length(2,50,{message:'La Profesion debe tener entre 2 a 150 caracteres'})
    profesion: string;

    @IsNumber()
    ultimo_oficio_id: number;

    @IsNumber()
    religion_id: number;

    // @IsString()
    // @Length(2,50,{message:'La talla debe tener entre 2 a 50 caracteres'})
    // talla: string;

    @IsNumber()
    ojos_color_id: number;

    @IsNumber()
    ojos_tamanio_id: number;

    @IsNumber()
    nariz_tamanio_id: number;

    @IsNumber()
    nariz_forma_id: number;

    @IsNumber()
    pelo_tipo_id: number;

    @IsNumber()
    pelo_color_id: number;

    @IsNumber()
    piel_id: number;

    @IsString()
    @Length(2,50,{message:'La altura debe tener entre 2 a 50 caracteres'})
    altura: string;

    @IsNumber()
    marca_corporal: number;

    @IsNumber()
    unidad_id: number;

    @IsNumber()
    pabellon_id: number;

    @IsNumber()
    establecimiento_procedencia_id: number;

    @IsNumber()
    reingreso_id: number;

    @IsNumber()
    reingreso_num: number;

    @IsDateString()
    fecha_ingreso: Date; 

    @IsString()
    @Length(2,200,{message:'La Causa Penal debe tener entre 2 a 50 caracteres'})
    causa_penal: string;

    @IsNumber()
    tipo_condena_id: number;

    @IsString()
    @Length(2,50,{message:'El Numero de Expediente debe tener entre 2 a 50 caracteres'})
    expediente_numero: string;

    @IsString()
    @Length(2,50,{message:'La Prontuario Policial debe tener entre 2 a 50 caracteres'})
    prontuario_policial: string;

    @IsString()
    @Length(2,50,{message:'La Expediente Policial debe tener entre 2 a 50 caracteres'})
    expediente_policial: string;

    @IsNumber()
    estado_procesal_id: number;

    @IsNumber()
    tipo_delito_id: number;

    @IsNumber()
    jurisdiccion1_id: number;

    @IsNumber()
    jurisdiccion2_id: number;

    @IsNumber()
    reincidencia_id: number;

    @IsNumber()
    reincidencia_num: number;

    @IsNumber()
    juzgado_id: number;

    @IsString()
    @Length(2,50,{message:'El campo Detenciones debe tener entre 2 a 50 caracteres'})
    detenciones: string;

    @IsNumber()
    jurisdiccion_provincia_id: number;

    @IsDateString()
    fecha_detencion: Date; 

    @IsNumber()
    condena_juzgado_id: number;

    @IsNumber()
    total_anios: number;

    @IsNumber()
    total_meses: number;

    @IsNumber()
    total_dias: number;

    @IsNumber()
    computo: number;
    
    @IsDateString()
    fecha_cumple: Date; 

    @IsNumber()
    tipo_defensor_id: number;

    @IsString()
    @Length(2,50,{message:'El Abogado debe tener entre 2 a 50 caracteres'})
    abogado: string;

    @IsString()
    @IsOptional()
    foto_frente: string;

    @IsString()
    @IsOptional()
    foto_perfil: string;

}