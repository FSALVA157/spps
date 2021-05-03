import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reincidencia {

    @PrimaryGeneratedColumn()
    id_reincidencia: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    reincidencia: string;
}
