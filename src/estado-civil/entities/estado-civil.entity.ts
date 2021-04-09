import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Tabla que contiene las opciones de sexo (masculino, femenino,...)
 */
@Entity()
export class  EstadoCivil {

    @PrimaryGeneratedColumn()
    id_estado_civil: number;

    @Column({
        type: "varchar",
        length: 50
           })
    estado_civil: string;
        }
