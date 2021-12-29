
import { IsOptional } from "class-validator";
import { Departamento } from "src/departamento/entities/departamento.entity";
import { EstadoCivil } from "src/estado-civil/entities/estado-civil.entity";
import { Nacionalidad } from "src/nacionalidad/entities/nacionalidad.entity";
import { Provincia } from "src/provincia/entities/provincia.entity";
import { Sexo } from "src/sexo/entities/sexo.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { VisitaCategoria } from "../enums/visita_enums";



@Entity()
export class Visita {
    @PrimaryGeneratedColumn()
    id_visita: number;

    @Column({
        type: 'int',
        nullable: false,
        unique: true
    })
    dni: number;

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
        type: "int",
        nullable: false
    })
    sexo_id: number;

    @ManyToOne(type => Sexo, {eager: true})
    @JoinColumn({
        name: "sexo_id",
        referencedColumnName: "id_sexo"
    })
    sexo: Sexo

    //ESTADO_CIVIL
    @Column({
        type: "int",
        nullable: false
    })
    estado_civil_id: number;    

    @ManyToOne(type => EstadoCivil, {eager: true})
    @JoinColumn({
        name: "estado_civil_id",
        referencedColumnName: "id_estado_civil"
    })
    estado_civil: EstadoCivil;

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

    @Column({
        type: "int",
        nullable: false
    })
    provincia_id: number;

    @ManyToOne(type => Provincia, {eager: true})
    @JoinColumn({
        name: "provincia_id",
        referencedColumnName: "id_provincia"
    })
    provincia: Provincia;

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

    @Column({
        type: "date",
        nullable: true
    })
    fecha_nacimiento: Date;  

    @Column({
        type: "enum",
        enum: VisitaCategoria,
        nullable: false       
    })
    categoria: VisitaCategoria;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    padre: string;

    @Column({
        type: 'int',
        nullable: true,
        unique: true
    })
    padre_dni: number;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    madre: string;

    @Column({
        type: 'int',
        nullable: true,
        unique: true
    })
    madre_dni: number;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    tutor1: string;

    @Column({
        type: 'int',
        nullable: true,
        unique: true
    })
    tutor1_dni: number;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    tutor2: string;

    @Column({
        type: 'int',
        nullable: true,
        unique: true
    })
    tutor2_dni: number;

    @Column({
        default: false,        
    })
    hijos_tiene: boolean;

    @Column({
        type: "int",
        default: 0,
         })
    @IsOptional()
    hijos_cantidad: number;

    @Column({
        type: "decimal",
        precision: 3,
        scale: 2,
        default: 0,
        nullable: true
    })
    altura: string;

    @Column({
        default: false,        
    })
    prohibida: boolean;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true
    })
    prohibicion_disposicion: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    prohibicion_historial: string;

    @Column({
        type: "date",
        nullable: true
    })
    @IsOptional()
    prohibicion_inicio: Date;

    @Column({
        type: "date",
        nullable: true
    })
    @IsOptional()
    prohibicion_fin: Date;

    @Column({
        type: 'varchar',
        nullable: true
    })
    @IsOptional()
    obs: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    @IsOptional()
    foto_ruta: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    @IsOptional()
    firma_ruta: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    @IsOptional()
    pd_ruta: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    @IsOptional()
    pi_ruta: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    @IsOptional()
    id_ruta: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    @IsOptional()
    ii_ruta: string;

    @Column({
        default: false,        
    })
    @IsOptional()
    codigo_rojo: boolean;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true
    })
    @IsOptional()
    detalle_codigo_rojo: string;

    @Column({
        type: 'int',
        nullable: true
    })
    dias: number;

    @Column({
        default: false,        
    })
    @IsOptional()
    restriccion: boolean;


}
