import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeloTipo } from './entities/pelo-tipo.entity';
import { EditPeloTipoDto } from './dto/edit-pelo-tipo.dto';
import { CreatePeloTipoDto } from './dto/create-pelo-tipo.dto';

@Injectable()
export class PeloTipoService {

    constructor(
        @InjectRepository(PeloTipo)
        private readonly peloTipoRepository: Repository<PeloTipo>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla PELO-TIPO
     * @returns 
     */
    async getAll(){
        return await this.peloTipoRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla PELO-TIPO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.peloTipoRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditPeloTipoDto){
        const respuesta = await this.peloTipoRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Tipo de Pelo que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla PELO-TIPO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.peloTipoRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Tipo de Pelo que desea eliminar");
        return await this.peloTipoRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla PELO-TIPO
     * @param data 
     * @returns 
     */
    async createOne(data: CreatePeloTipoDto){
        const existe = await this.peloTipoRepository.findOne({pelo_tipo: data.pelo_tipo});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.peloTipoRepository.create(data);
        return await this.peloTipoRepository.save(nuevo)
    }
}
