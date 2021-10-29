import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { Sexo } from '../../sexo/entities/sexo.entity';
import { EstadoCivil } from '../../estado-civil/entities/estado-civil.entity';
import { Departamento } from '../../departamento/entities/departamento.entity';
import { ZonaResidencia } from '../../zona-residencia/entities/zona-residencia.entity';
import { Nacionalidad } from '../../nacionalidad/entities/nacionalidad.entity';
import { NivelEducacion } from '../../nivel-educacion/entities/nivel-educacion.entity';
import { Oficio } from '../../oficio/entities/oficio.entity';
import { Religion } from '../../religion/entities/religion.entity';
import { OjosColor } from '../../ojos-color/entities/ojos-color.entity';
import { OjosTamanio } from '../../ojos-tamanio/entities/ojos-tamanio.entity';
import { NarizTamanio } from '../../nariz-tamanio/entities/nariz-tamanio.entity';
import { NarizForma } from '../../nariz-forma/entities/nariz-forma.entity';
import { PeloTipo } from '../../pelo-tipo/entities/pelo-tipo.entity';
import { PeloColor } from '../../pelo-color/entities/pelo-color.entity';
import { Piel } from '../../piel/entities/piel.entity';
import { Unidad } from '../../unidad/entities/unidad.entity';
import { Pabellon } from '../../pabellon/entities/pabellon.entity';
import { EstablecimientoProcedencia } from '../../establecimiento-procedencia/entities/establecimiento-procedencia.entity';
import { Reingreso } from '../../reingreso/entities/reingreso.entity';
import { TipoCondena } from '../../tipo-condena/entities/tipo-condena.entity';
import { EstadoProcesal } from '../../estado-procesal/entities/estado-procesal.entity';
import { TipoDelito } from '../../tipo-delito/entities/tipo-delito.entity';
import { Jurisdiccion } from '../../jurisdiccion/entities/jurisdiccion.entity';
import { Reincidencia } from '../../reincidencia/entities/reincidencia.entity';
import { Juzgado } from '../../juzgado/entities/juzgado.entity';
import { Provincia } from '../../provincia/entities/provincia.entity';
import { TipoDefensor } from '../../tipo-defensor/entities/tipo-defensor.entity';
import { IsOptional } from "class-validator";

/**
 * Tabla que contiene los campos de interno
 */
@Entity()
export class  Interno {

    @PrimaryGeneratedColumn()
    id_interno: number;

    @Column({
        type: "int",
        nullable: false,
        unique: true
    })
    prontuario: number;

    @Column({
        type: "varchar",
        length: 20,
        nullable: false
    })
    apellido_1: string;

    @Column({
        type: "varchar",
        length: 20,
        nullable: false
    })
    apellido_2: string;

    @Column({
        type: "varchar",
        length: 20,
        nullable: false
    })
    nombre_1: string;

    @Column({
        type: "varchar",
        length: 20,
        nullable: false
    })
    nombre_2: string;

    @Column({
        type: "varchar",
        length: 20,
        nullable: false
    })
    nombre_3: string;
    
    @Column({
        type: "varchar",
        length: 50        
    })
    alias: string;

    @Column({
        type: "int"        
    })
    dni: number;

    //SEXO
    @Column({
        type: "int",
        nullable: false
    })
    sexo_id: number;
    
    @ManyToOne(type => Sexo,{eager: true})
    @JoinColumn({
        name: "sexo_id",
        referencedColumnName: "id_sexo"
    })
    sexo: Sexo;
    //FIN SEXO

    //ESTADO_CIVIL
    @Column({
        type: "int",
        nullable: false
    })
    estado_civil_id: number;    
    
    @ManyToOne(type => EstadoCivil,{eager: true})
    @JoinColumn({
        name: "estado_civil_id",
        referencedColumnName: "id_estado_civil"
    })
    estado_civil: EstadoCivil;    
    //FIN ESTADO_CIVIL

    @Column({
        type: "varchar",
        length: 50
          })
    telefono: string;

    @Column({
        type: "varchar",
        length: 100,
            })
    domicilio: string;

    //DEPARTAMENTO
    @Column({
        type: "int",
        nullable: false
    })
    provincia_id: number; 
    
    @ManyToOne(type => Provincia,{eager: true})
    @JoinColumn({
        name: "provincia_id",
        referencedColumnName: "id_provincia"
    })
    provincia: Provincia;
    //FIN DEPARTAMENTO

    //DEPARTAMENTO
    @Column({
        type: "int",
        nullable: false
    })
    departamento_id: number; 
    
    @ManyToOne(type => Departamento,{eager: true})
    @JoinColumn({
        name: "departamento_id",
        referencedColumnName: "id_departamento"
    })
    departamento: Departamento;
    //FIN DEPARTAMENTO

    //ZONA-RESIDENCIA
    @Column({
        type: "int",
        nullable: false
    })
    zona_residencia_id: number;

    @ManyToOne(type => ZonaResidencia,{eager: true})
    @JoinColumn({
        name: "zona_residencia_id",
        referencedColumnName: "id_zona_residencia"
    })
    zona_residencia: ZonaResidencia;
    //FIN ZONA-RESIDENCIA    

    //NACIONALIDAD
    @Column({
        type: "int",
        nullable: false
    })
    nacionalidad_id: number;

    @ManyToOne(type => Nacionalidad,{eager: true})
    @JoinColumn({
        name: "nacionalidad_id",
        referencedColumnName: "id_nacionalidad"
    })
    nacionalidad: Nacionalidad;
    //FIN NACIONALIDAD

    //DEPARTAMENTO-NACIMIENTO
    @Column({
        type: "int",
        nullable: false
    })
    departamento_nacimiento_id: number;

    @ManyToOne(type => Departamento,{eager: true})
    @JoinColumn({
        name: "departamento_nacimiento_id",
        referencedColumnName: "id_departamento"
    })
    departamento_nacimiento: Departamento;
    //FIN DEPARTAMENTO-NACIMIENTO

    @Column({
        type: "date",
        nullable: true
    })
    fecha_nacimiento: Date;  

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    lugar_nacimiento: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    padre: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    madre: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    parientes: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    referente_emergencia: string;
    
    //NIVEL-EDUCACION
    @Column({
        type: "int",
        nullable: false
    })
    nivel_educacion_id: number;
    
    @ManyToOne(type => NivelEducacion,{eager: true})
    @JoinColumn({
        name: "nivel_educacion_id",
        referencedColumnName: "id_nivel_educacion"
    })
    nivel_educacion: NivelEducacion;
    //FIN NIVEL-EDUCACION
    
    @Column({
        type: "varchar",
        length: 300,
        nullable: true
    })
    profesion: string;

    //ULTIMO-OFICIO
    @Column({
        type: "int",
        nullable: false
    })
    ultimo_oficio_id: number;

    @ManyToOne(type => Oficio,{eager: true})
    @JoinColumn({
        name: "ultimo_oficio_id",
        referencedColumnName: "id_oficio"
    })
    oficio: Oficio;
    //FIN ULTIMO-OFICIO

    //RELIGION
    @Column({
        type: "int",
        nullable: false
    })
    religion_id: number;

    @ManyToOne(type => Religion,{eager: true})
    @JoinColumn({
        name: "religion_id",
        referencedColumnName: "id_religion"
    })
    religion: Religion;
    //FIN RELIGION

    @Column({
        type: "decimal",
        precision: 3,
        scale: 2,
        default: 0,
        nullable: true
    })
    altura: string;

    //OJOS-COLOR
    @Column({
        type: "int",
        nullable: false
    })
    ojos_color_id: number;

    @ManyToOne(type => OjosColor,{eager: true})
    @JoinColumn({
        name: "ojos_color_id",
        referencedColumnName: "id_ojos_color"
    })
    ojos_color: OjosColor;
    //FIN OJOS-COLOR

    //OJOS-TAMANIO
    @Column({
        type: "int",
        nullable: false
    })
    ojos_tamanio_id: number;

    @ManyToOne(type => OjosTamanio,{eager: true})
    @JoinColumn({
        name: "ojos_tamanio_id",
        referencedColumnName: "id_ojos_tamanio"
    })
    ojos_tamanio: OjosTamanio;
    //FIN OJOS-TAMANIO

    //NARIZ-TAMANIO
    @Column({
        type: "int",
        nullable: false
    })
    nariz_tamanio_id: number;

    @ManyToOne(type => NarizTamanio,{eager: true})
    @JoinColumn({
        name: "nariz_tamanio_id",
        referencedColumnName: "id_nariz_tamanio"
    })
    nariz_tamanio: NarizTamanio;
    //FIN NARIZ-TAMANIO

    //NARIZ-FORMA
    @Column({
        type: "int",
        nullable: false
    })
    nariz_forma_id: number;

    @ManyToOne(type => NarizForma,{eager: true})
    @JoinColumn({
        name: "nariz_forma_id",
        referencedColumnName: "id_nariz_forma"
    })
    nariz_forma: NarizForma;
    //FIN NARIZ-FORMA

    //PELO-TIPO
    @Column({
        type: "int",
        nullable: false
    })
    pelo_tipo_id: number;

    @ManyToOne(type => PeloTipo,{eager: true})
    @JoinColumn({
        name: "pelo_tipo_id",
        referencedColumnName: "id_pelo_tipo"
    })
    pelo_tipo: PeloTipo;
    //FIN PELO-TIPO

    //PELO-COLOR
    @Column({
        type: "int",
        nullable: false
    })
    pelo_color_id: number;

    @ManyToOne(type => PeloColor,{eager: true})
    @JoinColumn({
        name: "pelo_color_id",
        referencedColumnName: "id_pelo_color"
    })
    pelo_color: PeloColor;
    //FIN PELO-COLOR

    //PIEL
    @Column({
        type: "int",
        nullable: false
    })
    piel_id: number;

    @ManyToOne(type => Piel,{eager: true})
    @JoinColumn({
        name: "piel_id",
        referencedColumnName: "id_piel"
    })
    piel: Piel;
    //FIN PIEL

    
    //UNIDAD
    @Column({
        type: "int",
        nullable: false
    })
    unidad_id: number;

    @ManyToOne(type => Unidad,{eager: true})
    @JoinColumn({
        name: "unidad_id",
        referencedColumnName: "id_unidad"
    })
    unidad: Unidad;
    //FIN UNIDAD

    //PABELLON
    @Column({
        type: "int",
        nullable: false
    })
    pabellon_id: number;

    @ManyToOne(type => Pabellon,{eager: true})
    @JoinColumn({
        name: "pabellon_id",
        referencedColumnName: "id_pabellon"
    })
    pabellon: Pabellon;
    //FIN PABELLON

    //ESTABLECIMIENTO-PROCEDENCIA
    @Column({
        type: "int",
        nullable: false
    })
    establecimiento_procedencia_id: number;

    @ManyToOne(type => EstablecimientoProcedencia,{eager: true})
    @JoinColumn({
        name: "establecimiento_procedencia_id",
        referencedColumnName: "id_establecimiento_procedencia"
    })
    establecimiento_procedencia: EstablecimientoProcedencia;
    //FIN ESTABLECIMIENTO-PROCEDENCIA

    //REINGRESO
    @Column({
        type: "int",
        nullable: false
    })
    reingreso_id: number;

    @ManyToOne(type => Reingreso,{eager: true})
    @JoinColumn({
        name: "reingreso_id",
        referencedColumnName: "id_reingreso"
    })
    reingreso: Reingreso;
    //FIN REINGRESO

    @Column({
        type: "int",
        nullable: false
    })
    reingreso_num: number;

    @Column({
        type: "date",
        nullable: true
    })
    fecha_ingreso: Date; 

    @Column({
        type: "varchar",
        length: 200,
        nullable: false
    })
    causa_penal: string;

    //TIPO-CONDENA
    @Column({
        type: "int",
        nullable: false
    })
    tipo_condena_id: number;

    @ManyToOne(type => TipoCondena,{eager: true})
    @JoinColumn({
        name: "tipo_condena_id",
        referencedColumnName: "id_tipo_condena"
    })
    tipo_condena: TipoCondena;
    //TIPO-CONDENA

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    expediente_numero: string;

    @Column({
        type: "varchar",
        length: 50,
        nullable: true
    })
    prontuario_policial: string;

    @Column({
        type: "varchar",
        length: 50,
        nullable: true
    })
    expediente_policial: string;

    //ESTADO-PROCESAL
    @Column({
        type: "int",
        nullable: false
    })
    estado_procesal_id: number;

    @ManyToOne(type => EstadoProcesal,{eager: true})
    @JoinColumn({
        name: "estado_procesal_id",
        referencedColumnName: "id_estado_procesal"
    })
    estado_procesal: EstadoProcesal;
    //FIN ESTADO-PROCESAL

    //TIPO-DELITO
    @Column({
        type: "int",
        nullable: false
    })
    tipo_delito_id: number;

    @ManyToOne(type => TipoDelito,{eager: true})
    @JoinColumn({
        name: "tipo_delito_id",
        referencedColumnName: "id_tipo_delito"
    })
    tipo_delito: TipoDelito;
    //FIN TIPO-DELITO

    //JURISDICCION
    @Column({
        type: "int",
        nullable: false
    })
    jurisdiccion1_id: number;

    @ManyToOne(type => Jurisdiccion,{eager: true})
    @JoinColumn({
        name: "jurisdiccion1_id",
        referencedColumnName: "id_jurisdiccion"
    })
    jurisdiccion1: Jurisdiccion;

    @Column({
        type: "int",
        nullable: false
    })
    jurisdiccion2_id: number;

    @ManyToOne(type => Jurisdiccion,{eager: true})
    @JoinColumn({
        name: "jurisdiccion2_id",
        referencedColumnName: "id_jurisdiccion"
    })
    jurisdiccion2: Jurisdiccion;


    //FIN JURISDICCION

    //REINCIDENCIA
    @Column({
        type: "int",
        nullable: false
    })
    reincidencia_id: number;

    @ManyToOne(type => Reincidencia,{eager: true})
    @JoinColumn({
        name: "reincidencia_id",
        referencedColumnName: "id_reincidencia"
    })
    reincidencia: Reincidencia;
    //FIN REINCIDENCIA

    @Column({
        type: "int",
        nullable: true
    })
    reincidencia_num: number;

    //JUZGADO
    @Column({
        type: "int",
        nullable: false
    })
    juzgado_id: number;

    @ManyToOne(type => Juzgado,{eager: true})
    @JoinColumn({
        name: "juzgado_id",
        referencedColumnName: "id_juzgado"
    })
    juzgado: Juzgado;
    //FIN JUZGADO

    @Column({
        type: "varchar",
        length: 250,
        nullable: true
    })
    detenciones: string;

    //JURUSDICCION-PROVINCIA
    @Column({
        type: "int",
        nullable: false
    })
    jurisdiccion_provincia_id: number;

    @ManyToOne(type => Provincia,{eager: true})
    @JoinColumn({
        name: "jurisdiccion_provinicia_id",
        referencedColumnName: "id_provincia"
    })
    jurisdiccion_provincia: Provincia;
    //FIN JURISDICCION-PROVINCIA

    @Column({
        type: "date",
        nullable: true
    })
    fecha_detencion: Date; 

    //JUZGADO-CONDENA
    @Column({
        type: "int",
        nullable: false
    })
    condena_juzgado_id: number;

    @ManyToOne(type => Juzgado,{eager: true})
    @JoinColumn({
        name: "condena_juzgado_id",
        referencedColumnName: "id_juzgado"
    })
    condena_juzgado: Juzgado;
    //FIN JUZGADO-CONDENA

    @Column({
        type: "int",
        nullable: false
    })
    total_anios: number;

    @Column({
        type: "int",
        nullable: false
    })
    total_meses: number;

    @Column({
        type: "int",
        nullable: false
    })
    total_dias: number;

    @Column({
        type: "int",
        nullable: false
    })
    computo: number;

    @Column({
        type: "date",
        nullable: true
    })
    fecha_cumple: Date; 

    //TIPO-DEFENSOR
    @Column({
        type: "int",
        nullable: true
    })
    tipo_defensor_id: number;

    @ManyToOne(type => TipoDefensor,{eager: true})
    @JoinColumn({
        name: "tipo_defensor_id",
        referencedColumnName: "id_tipo_defensor"
    })
    tipo_defensor: TipoDefensor;
    //FIN TIPO-DEFENSOR

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    abogado: string;


//manejo de fotos
    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    foto_frente: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    foto_perfil: string;
    //fin manejo de fotos

    //manejo de estados para sistema de visitas
    @Column({
        default: false,
        nullable: true
    })
    @IsOptional()
    sancionado?: boolean

    @Column({
        default: false,
        nullable: true
    })
    @IsOptional()
    programa_puerta?: boolean

    @Column({
        default: true,
        nullable: true
    })
    @IsOptional()
    esta?: boolean



   @CreateDateColumn()
   fecha_alta: Date;

   @UpdateDateColumn()
   ultima_actualizacion:Date;

   @DeleteDateColumn()
   fecha_baja: Date;
}
