import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Tabla que contiene las opciones de sexo (masculino, femenino,...)
 */
@Entity()
export class  Etnia {

    @PrimaryGeneratedColumn()
    id_etnia: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    etnia: string;
}
