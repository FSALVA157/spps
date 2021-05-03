import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reingreso {
    @PrimaryGeneratedColumn()
    id_reingreso: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    reingreso: string;
}
