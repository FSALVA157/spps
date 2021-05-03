import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OjosColor {
    @PrimaryGeneratedColumn()
    id_ojos_color: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    ojos_color: string;
}
