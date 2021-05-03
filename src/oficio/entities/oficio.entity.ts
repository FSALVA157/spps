import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Oficio {

    @PrimaryGeneratedColumn()
    id_oficio: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    oficio: string;
}
