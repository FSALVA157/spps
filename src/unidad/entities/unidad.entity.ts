import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Unidad {
    @PrimaryGeneratedColumn()
    id_unidad: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    unidad: string;
}
