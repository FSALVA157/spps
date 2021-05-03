import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Tabla que contiene las opciones de nacionalidad
 */
@Entity()
export class Nacionalidad {
    @PrimaryGeneratedColumn()
    id_nacionalidad: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    nacionalidad: string;

}
