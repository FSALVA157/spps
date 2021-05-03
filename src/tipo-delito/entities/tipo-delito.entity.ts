import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoDelito {

    @PrimaryGeneratedColumn()
    id_tipo_delito: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    tipo_delito: string;
}
