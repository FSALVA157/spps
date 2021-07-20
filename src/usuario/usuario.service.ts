import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto, EditUsuarioDto } from './dto';
import { Usuario } from './entities/usuario.entity';
import * as fs from 'fs-extra';
import * as path from 'path';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla USUARIO
     * @returns 
     */
    async getAll(){
        return await this.usuarioRepository.find();
    }
    //----------------------------------

    /**
     * Servicio que retorna un registro de la tabla USUARIO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.usuarioRepository.findOneOrFail(id);
    }
    //----------------------------------

    //EDITAR USUARIO
    async editOne(id: number, data: EditUsuarioDto){
        const respuesta = await this.usuarioRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Usuario que intenta modificar");
        return respuesta;
    }
    //FIN EDITAR USUARIO
    //----------------------------------

    /**
     * Servicio que elimina un registro de la tabla USUARIO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.usuarioRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Usuario que desea eliminar");
        return await this.usuarioRepository.remove(respuesta);        
    }
    //----------------------------------

    
    /**
     * Servicio que crea un nuevo registro de la tabla USUARIO
     * @param data 
     * @returns 
     */
    async createOne(data: CreateUsuarioDto){
        const existe = await this.usuarioRepository.findOne({correo: data.correo});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.usuarioRepository.create(data);
        return await this.usuarioRepository.save(nuevo)
    }
    //----------------------------------

    //BUSCAR POR EMAIL
    async getUserByEmail(email: string){
        return await this.usuarioRepository
                .createQueryBuilder('user')
                .leftJoinAndSelect("user.unidad", "unidad")
                .where({correo: email})
                .addSelect('user.clave')
                .getOne()
    }
    //FIN BUSCAR X EMAIL
    //----------------------------------

    //BUSCAR USUARIOS POR UNIDAD
    async getUsersByUnidad(id_unidad: number){
        
        return await this.usuarioRepository.find({unidad_id: id_unidad});
    }
    //FIN BUSCAR USUARIOS POR UNIDAD
    //----------------------------------

    //GUARDAR FOTO EN BASE DE DATOS
    //guarda el nombre de la foto en el campo foto del usuario
    async cargarFoto(foto_url: string, id: number){
        const user = await this.usuarioRepository.findOne({id_usuario: id});
        if(!user){
            throw new NotFoundException('No existe el usuario al que intenta asignar la imagen');
           return; 
        }    
        
        //si ya existe una foto vamos a eliminarla de la carpeta de imagenes
        //`users-pictures/${user.foto}` es la ruta a la imagen
        if(user.foto !== null){            
                fs.unlink(path.resolve(`users-pictures/${user.foto}`)).then().catch(error=>{
                
                    console.log(error);
                });            
        }

        //reemplaza la foto actual por la subida
        let data: EditUsuarioDto = {
            "foto": foto_url
        };
        
        const resultado = await this.usuarioRepository.update(id, data);
        if(resultado.affected == 0) throw new NotFoundException('No se ha actualizado el campo de imagen');
        return resultado;
    }
    //FIN GUARDAR FOTO EN BASE DE DATOS
    //----------------------------------

    //METODO PARA RETORNAR ARCHIVO IMAGEN DEL USUARIO POR NOMBRE DE LA FOTO
    getFoto(nombre_foto: string){
        try {
            const ruta = path.resolve(__dirname,`../../users-pictures/${nombre_foto}`);
            return ruta;            
            
        } catch (error) {
            throw new BadRequestException(error.message);
        }   
    
    }
    //FIN METODO PARA RETORNAR ARCHIVO IMAGEN POR NOMBRE
    //----------------------------------
}
