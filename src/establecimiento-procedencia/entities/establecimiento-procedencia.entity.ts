import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


/**
 * Tabla que contiene las opciones de sexo (masculino, femenino,...)
 */
@Entity()
export class EstablecimientoProcedencia {
    @PrimaryGeneratedColumn()
    id_establecimiento_procedencia: number;

    @Column({
        type: "varchar",
        length: 50
           })
    establecimiento_procedencia: string;

}
