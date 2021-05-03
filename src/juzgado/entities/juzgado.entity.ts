import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Juzgado {

    @PrimaryGeneratedColumn()
    id_juzgado: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    juzgado: string;
}
