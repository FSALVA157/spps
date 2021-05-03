import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoCondena {

    @PrimaryGeneratedColumn()
    id_tipo_condena: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    tipo_condena: string;
}
