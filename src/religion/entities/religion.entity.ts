import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Religion {
    @PrimaryGeneratedColumn()
    id_religion: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    religion: string;
}
