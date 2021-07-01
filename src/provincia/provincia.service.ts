import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provincia } from './entities/provincia.entity';
import { EditProvinciaDto } from './dto/edit-provincia.dto';
import { CreateProvinciaDto } from './dto/create-provincia.dto';

@Injectable()
export class ProvinciaService {

    constructor(
        @InjectRepository(Provincia)
        private readonly provinciaRepository: Repository<Provincia>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla PROVINCIA
     * @returns 
     */
    async getAll(){
        return await this.provinciaRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla PROVINCIA según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.provinciaRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditProvinciaDto){
        const respuesta = await this.provinciaRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Provincia que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla PROVINCIA según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.provinciaRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Provincia que desea eliminar");
        return await this.provinciaRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla PROVINCIA
     * @param data 
     * @returns 
     */
    async createOne(data: CreateProvinciaDto){
        const existe = await this.provinciaRepository.findOne({provincia: data.provincia});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.provinciaRepository.create(data);
        return await this.provinciaRepository.save(nuevo)
    }
}
