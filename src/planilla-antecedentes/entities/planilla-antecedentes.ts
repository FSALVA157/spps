
export class PlanillaAntecedentes {
    
    id_interno: number;
    prontuario: number;
    apellido_1: string;
    apellido_2: string;
    nombre_1: string;
    nombre_2: string;
    nombre_3: string;
    dni: number;
    sexo: string;
    // estado_civil: string;
    // telefono: string;
    domicilio: string;
    departamento: string; 
    provincia: string;
    nacionalidad: string;
    departamento_nacimiento: string;
    provincia_nacimiento: string;
    fecha_nacimiento: Date;
    unidad: string;
    establecimiento_procedencia: string;
    reingreo: string;
    reingreso_num: number;
    fecha_ingreso: Date; 
    causa_penal: string;
    tipo_condena: string;
    expediente_numero: string;
    prontuario_policial: string;
    expediente_policial: string; //falta consultar
    estado_procesal: string;
    tipo_delito: string;
    jurisdiccion1: string;
    jurisdiccion2: string;
    reincidencia: string;
    juzgado: string;
    fecha_detencion: Date;
    juzgado_condena: string;
    total_anios: number;
    total_meses: number;
    total_dias: number;
    computo: number; //falta consultar
    fecha_cumple: Date;
    lleva_cumplido: string;
    falta_cumplir: string;
    conducta: string;
    concepto: string;
    periodo: string; 
    causas_penales_pendientes: string;
    salidas_transitorias: string;
    sanciones_disciplinarias: string; 
    conmutaciones: string;
//    @CreateDateColumn()
//    fecha_alta: Date;

//    @UpdateDateColumn()
//    ultima_actualizacion:Date;

//    @DeleteDateColumn()
//    fecha_baja: Date;

}
