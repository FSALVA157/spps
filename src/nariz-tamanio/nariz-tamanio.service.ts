import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NarizTamanio } from './entities/nariz-tamanio.entity';
import { EditNarizTamanioDto } from './dto/edit-nariz-tamanio.dto';
import { CreateNarizTamanioDto } from './dto/create-nariz-tamanio.dto';

@Injectable()
export class NarizTamanioService {
    constructor(
        @InjectRepository(NarizTamanio)
        private readonly narizTamanioRepository: Repository<NarizTamanio>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla NARIZ-TAMANIO
     * @returns 
     */
    async getAll(){
        return await this.narizTamanioRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla NARIZ-TAMANIO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.narizTamanioRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditNarizTamanioDto){
        const respuesta = await this.narizTamanioRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Tamanio de Nariz que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla NARIZ-TAMANIO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.narizTamanioRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Tamanio de Nariz que desea eliminar");
        return await this.narizTamanioRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla NARIZ-TAMANIO
     * @param data 
     * @returns 
     */
    async createOne(data: CreateNarizTamanioDto){
        const existe = await this.narizTamanioRepository.findOne({nariz_tamanio: data.nariz_tamanio});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.narizTamanioRepository.create(data);
        return await this.narizTamanioRepository.save(nuevo)
    }

}
