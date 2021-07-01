import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unidad } from './entities/unidad.entity';
import { EditUnidadDto } from './dto/edit-unidad.dto';
import { CreateUnidadDto } from './dto/create-unidad.dto';

@Injectable()
export class UnidadService {

    constructor(
        @InjectRepository(Unidad)
        private readonly unidadRepository: Repository<Unidad>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla UNIDAD
     * @returns 
     */
    async getAll(){
        return await this.unidadRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla UNIDAD según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.unidadRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditUnidadDto){
        const respuesta = await this.unidadRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Unidad que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla UNIDAD según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.unidadRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Unidad que desea eliminar");
        return await this.unidadRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla UNIDAD
     * @param data 
     * @returns 
     */
    async createOne(data: CreateUnidadDto){
        const existe = await this.unidadRepository.findOne({unidad: data.unidad});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.unidadRepository.create(data);
        return await this.unidadRepository.save(nuevo)
    }
}
