import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoDefensor {

    @PrimaryGeneratedColumn()
    id_tipo_defensor: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    tipo_defensor: string;
}
