import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OjosTamanio {

    @PrimaryGeneratedColumn()
    id_ojos_tamanio: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    ojos_tamanio: string;
}
