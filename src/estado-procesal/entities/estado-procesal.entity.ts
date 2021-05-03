import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EstadoProcesal {

    @PrimaryGeneratedColumn()
    id_estado_procesal: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    estado_procesal: string;
}
