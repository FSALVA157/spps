import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsuarioRole } from '../enums/usuario-role-enums';
import { hash } from 'bcrypt';


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
        nullable: false,
        select: false
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
        nullable: true
    })
    foto: string;
    
    @Column({
        type: "enum",
        nullable:true,
        enum: UsuarioRole,
        default: UsuarioRole.normal
    })
    role: UsuarioRole;

    @CreateDateColumn()
    fecha_alta: Date;

    @UpdateDateColumn()
    ultima_actualizacion:Date;

    @DeleteDateColumn()
    fecha_baja: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        if(!this.clave){
            return;
        }
        this.clave = await hash(this.clave,10);
    }
    
}
