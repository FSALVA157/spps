import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Piel } from './entities/piel.entity';
import { EditPielDto } from './dto/edit-piel.dto';
import { CreatePielDto } from './dto/create-piel.dto';

@Injectable()
export class PielService {

    constructor(
        @InjectRepository(Piel)
        private readonly pielRepository: Repository<Piel>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla PIEL
     * @returns 
     */
    async getAll(){
        return await this.pielRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla PIEL según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.pielRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditPielDto){
        const respuesta = await this.pielRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro Piel que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla PIEL según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.pielRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Piel que desea eliminar");
        return await this.pielRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla PIEL
     * @param data 
     * @returns 
     */
    async createOne(data: CreatePielDto){
        const existe = await this.pielRepository.findOne({piel: data.piel});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.pielRepository.create(data);
        return await this.pielRepository.save(nuevo)
    }
}
