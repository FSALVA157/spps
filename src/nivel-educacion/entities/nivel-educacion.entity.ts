import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


/**
 * Tabla que contiene las opciones de NIVEL-EDUCACION 
 */
@Entity()
export class NivelEducacion {
    @PrimaryGeneratedColumn()
    id_nivel_educacion: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    nivel_educacion: string;

}
