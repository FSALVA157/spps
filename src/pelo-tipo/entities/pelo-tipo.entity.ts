import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PeloTipo {
    @PrimaryGeneratedColumn()
    id_pelo_tipo: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    pelo_tipo: string;
}
