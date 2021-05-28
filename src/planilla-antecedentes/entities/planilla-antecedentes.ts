
export class PlanillaAntecedentes {
    
    id_interno: number;
    prontuario: number;
    apellido_1: string;
    apellido_2: string;
    nombre_1: string;
    nombre_3: string;
    alias: string;
    dni: number;
    sexo: string;
    estado_civil: string;
    telefono: string;
    domicilio: string;
    departamento: string; 
    zona_residencia: string; 
    nacionalidad: string;
    departamento_nacimiento: string;
    fecha_nacimiento: Date;  
    lugar_nacimiento: string;
    padre: string;
    madre: string;
    parientes: string;
    referente_emergencia: string;
    nivel_educacion: string;
    profesion: string;
    ultimo_oficio: string;
    religion: string;
    talla: string;
    ojos_color: string;
    ojos_tamanio: string;
    nariz_tamanio: string;
    nariz_forma: string;
    pelo_tipo: string;
//     pelo_color: string;

//     @ManyToOne(type => PeloColor,{eager: true})
//     @JoinColumn({
//         name: "pelo_color_id",
//         referencedColumnName: "id_pelo_color"
//     })
//     pelo_color: PeloColor;
//     //FIN PELO-COLOR

//     //PIEL
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     piel_id: number;

//     @ManyToOne(type => Piel,{eager: true})
//     @JoinColumn({
//         name: "piel_id",
//         referencedColumnName: "id_piel"
//     })
//     piel: Piel;
//     //FIN PIEL

//     @Column({
//         type: "int",
//         nullable: false
//     })
//     marca_corporal: number;

//     //UNIDAD
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     unidad_id: number;

//     @ManyToOne(type => Unidad,{eager: true})
//     @JoinColumn({
//         name: "unidad_id",
//         referencedColumnName: "id_unidad"
//     })
//     unidad: Unidad;
//     //FIN UNIDAD

//     //PABELLON
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     pabellon_id: number;

//     @ManyToOne(type => Pabellon,{eager: true})
//     @JoinColumn({
//         name: "pabellon_id",
//         referencedColumnName: "id_pabellon"
//     })
//     pabellon: Pabellon;
//     //FIN PABELLON

//     //ESTABLECIMIENTO-PROCEDENCIA
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     establecimiento_procedencia_id: number;

//     @ManyToOne(type => EstablecimientoProcedencia,{eager: true})
//     @JoinColumn({
//         name: "establecimiento_procedencia_id",
//         referencedColumnName: "id_establecimiento_procedencia"
//     })
//     establecimiento_procedencia: EstablecimientoProcedencia;
//     //FIN ESTABLECIMIENTO-PROCEDENCIA

//     //REINGRESO
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     reingreso_id: number;

//     @ManyToOne(type => Reingreso,{eager: true})
//     @JoinColumn({
//         name: "reingreso_id",
//         referencedColumnName: "id_reingreso"
//     })
//     reingreso: Reingreso;
//     //FIN REINGRESO

//     @Column({
//         type: "int",
//         nullable: false
//     })
//     reingreso_num: number;

//     @Column({
//         type: "date",
//         nullable: true
//     })
//     fecha_ingreso: Date; 

//     @Column({
//         type: "varchar",
//         length: 200,
//         nullable: false
//     })
//     causa_penal: string;

//     //TIPO-CONDENA
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     tipo_condena_id: number;

//     @ManyToOne(type => TipoCondena,{eager: true})
//     @JoinColumn({
//         name: "tipo_condena_id",
//         referencedColumnName: "id_tipo_condena"
//     })
//     tipo_condena: TipoCondena;
//     //TIPO-CONDENA

//     @Column({
//         type: "varchar",
//         length: 50,
//         nullable: false
//     })
//     expediente_numero: string;

//     @Column({
//         type: "varchar",
//         length: 50,
//         nullable: true
//     })
//     prontuario_policial: string;

//     @Column({
//         type: "varchar",
//         length: 50,
//         nullable: true
//     })
//     expediente_policial: string;

//     //ESTADO-PROCESAL
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     estado_procesal_id: number;

//     @ManyToOne(type => EstadoProcesal,{eager: true})
//     @JoinColumn({
//         name: "estado_procesal_id",
//         referencedColumnName: "id_estado_procesal"
//     })
//     estado_procesal: EstadoProcesal;
//     //FIN ESTADO-PROCESAL

//     //TIPO-DELITO
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     tipo_delito_id: number;

//     @ManyToOne(type => TipoDelito,{eager: true})
//     @JoinColumn({
//         name: "tipo_delito_id",
//         referencedColumnName: "id_tipo_delito"
//     })
//     tipo_delito: TipoDelito;
//     //FIN TIPO-DELITO

//     //JURISDICCION
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     jurisdiccion_id: number;

//     @ManyToOne(type => Jurisdiccion,{eager: true})
//     @JoinColumn({
//         name: "jurisdiccion_id",
//         referencedColumnName: "id_jurisdiccion"
//     })
//     jurisdiccion: Jurisdiccion;
//     //FIN JURISDICCION

//     //REINCIDENCIA
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     reincidencia_id: number;

//     @ManyToOne(type => Reincidencia,{eager: true})
//     @JoinColumn({
//         name: "reincidencia_id",
//         referencedColumnName: "id_reincidencia"
//     })
//     reincidencia: Reincidencia;
//     //FIN REINCIDENCIA

//     @Column({
//         type: "int",
//         nullable: true
//     })
//     reincidencia_num: number;

//     //JUZGADO
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     juzgado_id: number;

//     @ManyToOne(type => Juzgado,{eager: true})
//     @JoinColumn({
//         name: "juzgado_id",
//         referencedColumnName: "id_juzgado"
//     })
//     juzgado: Juzgado;
//     //FIN JUZGADO

//     @Column({
//         type: "varchar",
//         length: 250,
//         nullable: true
//     })
//     detenciones: string;

//     //JURUSDICCION-PROVINCIA
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     jurisdiccion_provinicia_id: number;

//     @ManyToOne(type => Provincia,{eager: true})
//     @JoinColumn({
//         name: "jurisdiccion_provinicia_id",
//         referencedColumnName: "id_provincia"
//     })
//     jurisdiccion_provinicia: Provincia;
//     //FIN JURISDICCION-PROVINCIA

//     @Column({
//         type: "date",
//         nullable: true
//     })
//     fecha_detencion: Date; 

//     //JUZGADO-CONDENA
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     condena_juzgado_id: number;

//     @ManyToOne(type => Juzgado,{eager: true})
//     @JoinColumn({
//         name: "condena_juzgado_id",
//         referencedColumnName: "id_juzgado"
//     })
//     condena_juzgado: Juzgado;
//     //FIN JUZGADO-CONDENA

//     @Column({
//         type: "int",
//         nullable: false
//     })
//     total_anios: number;

//     @Column({
//         type: "int",
//         nullable: false
//     })
//     total_meses: number;

//     @Column({
//         type: "int",
//         nullable: false
//     })
//     total_dias: number;

//     @Column({
//         type: "int",
//         nullable: false
//     })
//     computo: number;

//     @Column({
//         type: "date",
//         nullable: true
//     })
//     fecha_cumple: Date; 

//     //TIPO-DEFENSOR
//     @Column({
//         type: "int",
//         nullable: false
//     })
//     tipo_defensor_id: number;

//     @ManyToOne(type => TipoDefensor,{eager: true})
//     @JoinColumn({
//         name: "tipo_defensor_id",
//         referencedColumnName: "id_tipo_defensor"
//     })
//     tipo_defensor: TipoDefensor;
//     //FIN TIPO-DEFENSOR

//     @Column({
//         type: "varchar",
//         length: 50,
//         nullable: true
//     })
//     abogado: string;

//    @CreateDateColumn()
//    fecha_alta: Date;

//    @UpdateDateColumn()
//    ultima_actualizacion:Date;

//    @DeleteDateColumn()
//    fecha_baja: Date;

}
