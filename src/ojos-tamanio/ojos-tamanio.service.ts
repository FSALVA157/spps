import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OjosTamanio } from './entities/ojos-tamanio.entity';
import { EditOjosTamanioDto } from './dto/edit-ojos-tamanio.dto';
import { CreateOjosTamanioDto } from './dto/create-ojos-tamanio.dto';

@Injectable()
export class OjosTamanioService {
    constructor(
        @InjectRepository(OjosTamanio)
        private readonly ojosTamanioRepository: Repository<OjosTamanio>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla OJOS-TAMANIO
     * @returns 
     */
    async getAll(){
        return await this.ojosTamanioRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla OJOS-TAMANIO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.ojosTamanioRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditOjosTamanioDto){
        const respuesta = await this.ojosTamanioRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Tamanio de ojos que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla OJOS-TAMANIO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.ojosTamanioRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Tamanio de Ojos que desea eliminar");
        return await this.ojosTamanioRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla OJOS-TAMANIO
     * @param data 
     * @returns 
     */
    async createOne(data: CreateOjosTamanioDto){
        const existe = await this.ojosTamanioRepository.findOne({ojos_tamanio: data.ojos_tamanio});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.ojosTamanioRepository.create(data);
        return await this.ojosTamanioRepository.save(nuevo)
    }
}
