import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto, EditUsuarioDto } from './dto';
import { Usuario } from './entities/usuario.entity';

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
        return await this.usuarioRepository.findAndCount();
    }

    /**
     * Servicio que retorna un registro de la tabla USUARIO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.usuarioRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditUsuarioDto){
        const respuesta = await this.usuarioRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Usuario que intenta modificar");
        return respuesta;
    }

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

    //metodo que busca por email
    async getUserByEmail(email: string){
        return await this.usuarioRepository
                .createQueryBuilder('user')
                .where({correo: email})
                .addSelect('user.clave')
                .getOne()
    }
}
