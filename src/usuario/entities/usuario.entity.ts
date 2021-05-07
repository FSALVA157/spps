import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false,
        unique: true
    })
    correo: string;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    clave: string;

    @Column({
        type: "int",
        nullable: false
    })
    dni: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    nombre: string;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    apellido: string;

    @Column({
        type: "varchar",
        length: 200,
        nullable: false
    })
    foto: string;

    @CreateDateColumn()
    fecha_alta: Date;

    @UpdateDateColumn()
    ultima_actualizacion:Date;

    @DeleteDateColumn()
    fecha_baja: Date;
}
