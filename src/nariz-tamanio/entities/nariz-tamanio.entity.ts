import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NarizTamanio {
    @PrimaryGeneratedColumn()
    id_nariz_tamanio: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    nariz_tamanio: string;
}
