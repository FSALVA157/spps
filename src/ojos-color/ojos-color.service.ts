import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OjosColor } from './entities/ojos-color.entity';
import { EditOjosColorDto } from './dto/edit-ojos-color.dto';
import { CreateOjosColorDto } from './dto/create-ojos-color.dto';

@Injectable()
export class OjosColorService {
    constructor(
        @InjectRepository(OjosColor)
        private readonly ojosColorRepository: Repository<OjosColor>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla OJOS-COLOR
     * @returns 
     */
    async getAll(){
        return await this.ojosColorRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla OJOS-COLOR según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.ojosColorRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditOjosColorDto){
        const respuesta = await this.ojosColorRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Ojos Color que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla OJOS-COLOR según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.ojosColorRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Ojos Color que desea eliminar");
        return await this.ojosColorRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla OJOS-COLOR
     * @param data 
     * @returns 
     */
    async createOne(data: CreateOjosColorDto){
        const existe = await this.ojosColorRepository.findOne({ojos_color: data.ojos_color});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.ojosColorRepository.create(data);
        return await this.ojosColorRepository.save(nuevo)
    }

}
