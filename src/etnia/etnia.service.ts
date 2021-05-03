import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEtniaDto } from './dto/create-etnia.dto';
import { EditEtniaDto } from './dto/edit-etnia.dto';

import { Etnia } from './entities/etnia.entity';

@Injectable()
export class EtniaService {
    constructor(
        @InjectRepository(Etnia)
        private readonly etniaRepository: Repository<Etnia>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla ETNIA
     * @returns 
     */
    async getAll(){
        return await this.etniaRepository.findAndCount();
    }

    /**
     * Servicio que retorna un registro de la tabla ETNIA según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.etniaRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditEtniaDto){
        const respuesta = await this.etniaRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Etnia que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla ETNIA según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.etniaRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro de Etnia que desea eliminar");
        return await this.etniaRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla ETNIA
     * @param data 
     * @returns 
     */
    async createOne(data: CreateEtniaDto){
        const existe = await this.etniaRepository.findOne({etnia: data.etnia});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.etniaRepository.create(data);
        return await this.etniaRepository.save(nuevo)
    }


}
