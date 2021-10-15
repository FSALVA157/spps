
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MarcaCorporal {
    @PrimaryGeneratedColumn()
    id_marca: number;

    @Column({
        type: 'int',
        nullable: false
    })
    prontuario: number;

    @Column({
        type: 'int',
        nullable: false
    })
    tipo_id: number;

    @Column({
        type: 'varchar',
        length: 300,
        nullable: false
    })
    detalle: string;

    @Column({
        type: 'varchar',
        length: 300        
    })
    img: string;
    


}
