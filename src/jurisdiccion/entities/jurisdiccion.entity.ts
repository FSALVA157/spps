import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Jurisdiccion {

    @PrimaryGeneratedColumn()
    id_jurisdiccion: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    jurisdiccion: string;
}
