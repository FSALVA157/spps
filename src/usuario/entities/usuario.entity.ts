import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsuarioRole } from '../enums/usuario-role-enums';
import { hash } from 'bcrypt';
import { Unidad } from '../../unidad/entities/unidad.entity';


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

    //UNIDAD
    @Column({
        type: "int",
        nullable: false
    })
    unidad_id: number;
    
    @ManyToOne(type => Unidad,{eager: true})
    @JoinColumn({
        name: "unidad_id",
        referencedColumnName: "id_unidad"
    })
    unidad: Unidad;
    //FIN UNIDAD
    
    @Column({
        type: "enum",
        nullable:false,
        enum: UsuarioRole,
        //default: UsuarioRole.normal
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
