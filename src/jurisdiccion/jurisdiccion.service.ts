import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jurisdiccion } from './entities/jurisdiccion.entity';
import { EditJurisdiccionDto } from './dto/edit-jurisdiccion.dto';
import { CreateJurisdiccionDto } from './dto/create-jurisdiccion.dto';

@Injectable()
export class JurisdiccionService {

    constructor(
        @InjectRepository(Jurisdiccion)
        private readonly jurisdiccionRepository: Repository<Jurisdiccion>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla JURISDICCION
     * @returns 
     */
    async getAll(){
        return await this.jurisdiccionRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla JURISDICCION según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.jurisdiccionRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditJurisdiccionDto){
        const respuesta = await this.jurisdiccionRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Jurisdiccion que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla JURISDICCION según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.jurisdiccionRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro de Jurisdiccion que desea eliminar");
        return await this.jurisdiccionRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla JURISDICCION
     * @param data 
     * @returns 
     */
    async createOne(data: CreateJurisdiccionDto){
        const existe = await this.jurisdiccionRepository.findOne({jurisdiccion: data.jurisdiccion});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.jurisdiccionRepository.create(data);
        return await this.jurisdiccionRepository.save(nuevo)
    }
}
