import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Piel {

    @PrimaryGeneratedColumn()
    id_piel: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    piel: string;
}
