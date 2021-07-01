import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstablecimientoProcedencia } from './entities/establecimiento-procedencia.entity';
import { EditNacionalidadDto } from '../nacionalidad/dto/edit-nacionalidad.dto';
import { EditEstablecimientoProcedenciaDto } from './dto';
import { CreateEstablecimientoProcedenciaDto } from './dto/create-establecimiento-procedencia.dto';

@Injectable()
export class EstablecimientoProcedenciaService {
    constructor(
        @InjectRepository(EstablecimientoProcedencia)
        private readonly establecimientoProcedenciaRepository: Repository<EstablecimientoProcedencia>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla ESTABLECIMIENTO-PROCEDECNIA
     * @returns 
     */
    async getAll(){
        return await this.establecimientoProcedenciaRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla ESTABLECIMIENTO-PROCEDENCIA según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.establecimientoProcedenciaRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditEstablecimientoProcedenciaDto){
        const respuesta = await this.establecimientoProcedenciaRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Establecimiento de Procedencia que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla ESTABLECIMIENTO-PROCEDENCIA según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.establecimientoProcedenciaRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Establecimiento de Procedencia que desea eliminar");
        return await this.establecimientoProcedenciaRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla ESTABLECIMIENTO-PROCEDENCIA
     * @param data 
     * @returns 
     */
    async createOne(data: CreateEstablecimientoProcedenciaDto){
        const existe = await this.establecimientoProcedenciaRepository.findOne({establecimiento_procedencia: data.establecimiento_procedencia});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.establecimientoProcedenciaRepository.create(data);
        return await this.establecimientoProcedenciaRepository.save(nuevo)
    }

}
