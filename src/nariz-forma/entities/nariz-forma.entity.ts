import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NarizForma {

    @PrimaryGeneratedColumn()
    id_nariz_forma: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    nariz_forma: string;
}
