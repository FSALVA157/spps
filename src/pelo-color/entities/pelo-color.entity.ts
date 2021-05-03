import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PeloColor {

    @PrimaryGeneratedColumn()
    id_pelo_color: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    pelo_color: string;
}
