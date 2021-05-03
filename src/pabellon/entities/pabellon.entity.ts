import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pabellon {

    @PrimaryGeneratedColumn()
    id_pabellon: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    pabellon: string;
}
