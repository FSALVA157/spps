import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { EstadoCivil } from './entities/estado-civil.entity';
import { EditEstadoCivilDto } from './dto/edit-estado-civil.dto';
import { CreateEstadoCivilDto } from './dto/create-estado-civil.dto';



@Injectable()
export class EstadoCivilService {
    constructor(
        @InjectRepository(EstadoCivil)
        private readonly estadoCivilRepository: Repository<EstadoCivil>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla Estado Civil
     * @returns 
     */
    async getAll(){
        return await this.estadoCivilRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla ESTADO-CIVIL según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.estadoCivilRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditEstadoCivilDto){
        const respuesta = await this.estadoCivilRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de EstadoCivil que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla ESTADO-CIVIL según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.estadoCivilRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro EstadoCivil que desea eliminar");
        return await this.estadoCivilRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla ESTADO-CIVIL
     * @param data 
     * @returns 
     */
    async createOne(data: CreateEstadoCivilDto){
        const existe = await this.estadoCivilRepository.findOne({estado_civil: data.estado_civil});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.estadoCivilRepository.create(data);
        return await this.estadoCivilRepository.save(nuevo)
    }


}
