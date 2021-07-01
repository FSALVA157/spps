import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nacionalidad } from './entities/nacionalidad.entity';
import { EditNacionalidadDto } from './dto/edit-nacionalidad.dto';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';

@Injectable()
export class NacionalidadService {

    constructor(
        @InjectRepository(Nacionalidad)
        private readonly nacionalidadRepository: Repository<Nacionalidad>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla NACIONALIDAD
     * @returns 
     */
    async getAll(){
        return await this.nacionalidadRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla NACIONALIDAD según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.nacionalidadRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditNacionalidadDto){
        const respuesta = await this.nacionalidadRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Nacionalidad que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla SEXO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.nacionalidadRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Nacionalidad que desea eliminar");
        return await this.nacionalidadRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla SEXO
     * @param data 
     * @returns 
     */
    async createOne(data: CreateNacionalidadDto){
        const existe = await this.nacionalidadRepository.findOne({nacionalidad: data.nacionalidad});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.nacionalidadRepository.create(data);
        return await this.nacionalidadRepository.save(nuevo)
    }
}
