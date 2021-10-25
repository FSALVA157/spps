import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Localidad {

    @PrimaryGeneratedColumn()
    id_localidad: number;

    @Column({
        type: 'varchar',
        length: 300,
        nullable:false
    })
    localidad: string;

    @Column({
        type: 'int',
        nullable: false
    })
    departamento_id: number;
}
