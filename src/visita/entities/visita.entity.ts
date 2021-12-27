import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



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




}
