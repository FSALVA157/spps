import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Oficio } from './entities/oficio.entity';
import { EditOficioDto } from './dto/edit-oficio.dto';
import { CreateOficioDto } from './dto/create-oficio.dto';

@Injectable()
export class OficioService {

    constructor(
        @InjectRepository(Oficio)
        private readonly oficioRepository: Repository<Oficio>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla OFICIO
     * @returns 
     */
    async getAll(){
        return await this.oficioRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla OFICIO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.oficioRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditOficioDto){
        const respuesta = await this.oficioRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Ofico que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla OFICIO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.oficioRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Oficio que desea eliminar");
        return await this.oficioRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla OFICIO
     * @param data 
     * @returns 
     */
    async createOne(data: CreateOficioDto){
        const existe = await this.oficioRepository.findOne({oficio: data.oficio});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.oficioRepository.create(data);
        return await this.oficioRepository.save(nuevo)
    }
}
