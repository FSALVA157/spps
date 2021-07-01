import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reincidencia } from './entities/reincidencia.entity';
import { EditReingresoDto } from '../reingreso/dto/edit-reingreso.dto';
import { EditReincidenciaDto } from './dto/edit-reincidencia.dto';
import { CreateReincidenciaDto } from './dto/create-reincidencia.dto';

@Injectable()
export class ReincidenciaService {

    constructor(
        @InjectRepository(Reincidencia)
        private readonly reincidenciaRepository: Repository<Reincidencia>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla REINCIDENCIA
     * @returns 
     */
    async getAll(){
        return await this.reincidenciaRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla REINCIDENCIA según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.reincidenciaRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditReincidenciaDto){
        const respuesta = await this.reincidenciaRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Reincidencia que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla REINCIDENCIA según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.reincidenciaRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Reincidencia que desea eliminar");
        return await this.reincidenciaRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla REINCIDENCIA
     * @param data 
     * @returns 
     */
    async createOne(data: CreateReincidenciaDto){
        const existe = await this.reincidenciaRepository.findOne({reincidencia: data.reincidencia});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.reincidenciaRepository.create(data);
        return await this.reincidenciaRepository.save(nuevo)
    }
}
