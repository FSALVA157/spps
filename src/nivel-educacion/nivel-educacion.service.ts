import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NivelEducacion } from './entities/nivel-educacion.entity';
import { EditNacionalidadDto } from '../nacionalidad/dto/edit-nacionalidad.dto';
import { EditNivelEducacionDto } from './dto/edit-nivel-educacion.dto';
import { CreateNivelEducacionDto } from './dto/create-nivel-educacion.dto';

@Injectable()
export class NivelEducacionService {
    constructor(
        @InjectRepository(NivelEducacion)
        private readonly nivelEducacionRepository: Repository<NivelEducacion>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla NIVEL-EDUCACION
     * @returns 
     */
    async getAll(){
        return await this.nivelEducacionRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla NIVEL-EDUCACION según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.nivelEducacionRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditNivelEducacionDto){
        const respuesta = await this.nivelEducacionRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Nivel de Educacion que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla NIVEL-EDUCACION según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.nivelEducacionRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Nivel de Eduacion que desea eliminar");
        return await this.nivelEducacionRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla NIVEL-EDUCACION
     * @param data 
     * @returns 
     */
    async createOne(data: CreateNivelEducacionDto){
        const existe = await this.nivelEducacionRepository.findOne({nivel_educacion: data.nivel_educacion});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.nivelEducacionRepository.create(data);
        return await this.nivelEducacionRepository.save(nuevo)
    }

}
