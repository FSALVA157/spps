import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reingreso } from './entities/reingreso.entity';
import { EditReingresoDto } from './dto/edit-reingreso.dto';
import { CreateReingresoDto } from './dto/create-reingreso.dto';

@Injectable()
export class ReingresoService {

    constructor(
        @InjectRepository(Reingreso)
        private readonly reingresoRepository: Repository<Reingreso>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla REINGRESO
     * @returns 
     */
    async getAll(){
        return await this.reingresoRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla REINGRESO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.reingresoRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditReingresoDto){
        const respuesta = await this.reingresoRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Reingreso que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla REINGRESO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.reingresoRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Reingreso que desea eliminar");
        return await this.reingresoRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla REINGRESO
     * @param data 
     * @returns 
     */
    async createOne(data: CreateReingresoDto){
        const existe = await this.reingresoRepository.findOne({reingreso: data.reingreso});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.reingresoRepository.create(data);
        return await this.reingresoRepository.save(nuevo)
    }
}
