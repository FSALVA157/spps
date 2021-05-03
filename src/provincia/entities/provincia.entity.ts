import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Provincia {
    @PrimaryGeneratedColumn()
    id_provincia: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    provincia: string;
}
