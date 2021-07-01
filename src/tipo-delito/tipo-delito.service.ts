import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoDelito } from './entities/tipo-delito.entity';
import { EditTipoDelitoDto } from './dto/edit-tipo-delito.dto';
import { CreateTipoDelitoDto } from './dto/create-tipo-delito.dto';

@Injectable()
export class TipoDelitoService {

    constructor(
        @InjectRepository(TipoDelito)
        private readonly tipoDelitoRepository: Repository<TipoDelito>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla TIPO-DELITO
     * @returns 
     */
    async getAll(){
        return await this.tipoDelitoRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla TIPO-DELITO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.tipoDelitoRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditTipoDelitoDto){
        const respuesta = await this.tipoDelitoRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Tipo de Delito que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla TIPO-DELITO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.tipoDelitoRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Tipo de Delito que desea eliminar");
        return await this.tipoDelitoRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla TIPO-DELITO
     * @param data 
     * @returns 
     */
    async createOne(data: CreateTipoDelitoDto){
        const existe = await this.tipoDelitoRepository.findOne({tipo_delito: data.tipo_delito});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.tipoDelitoRepository.create(data);
        return await this.tipoDelitoRepository.save(nuevo)
    }
}
