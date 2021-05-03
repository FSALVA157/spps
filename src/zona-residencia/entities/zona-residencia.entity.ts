import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class ZonaResidencia {
    @PrimaryGeneratedColumn()
    id_zona_residencia: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
           })
    zona_residencia: string;
}
