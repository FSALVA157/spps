import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoProcesal } from './entities/estado-procesal.entity';
import { EditEstadoProcesalDto } from './dto/edit-estado-procesal.dto';
import { CreateEstadoProcesalDto } from './dto/create-estado-procesal.dto';

@Injectable()
export class EstadoProcesalService {

    constructor(
        @InjectRepository(EstadoProcesal)
        private readonly estadoProcesalRepository: Repository<EstadoProcesal>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla ESTADO-PROCESAL
     * @returns 
     */
    async getAll(){
        return await this.estadoProcesalRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla ESTADO-PROCESAL según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.estadoProcesalRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditEstadoProcesalDto){
        const respuesta = await this.estadoProcesalRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Estado Procesal que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla ESTADO-PROCESAL según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.estadoProcesalRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro de Estado Procesal que desea eliminar");
        return await this.estadoProcesalRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla ESTADO-PROCESAL
     * @param data 
     * @returns 
     */
    async createOne(data: CreateEstadoProcesalDto){
        const existe = await this.estadoProcesalRepository.findOne({estado_procesal: data.estado_procesal});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.estadoProcesalRepository.create(data);
        return await this.estadoProcesalRepository.save(nuevo)
    }

}
