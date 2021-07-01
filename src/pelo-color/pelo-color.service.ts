import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeloColor } from './entities/pelo-color.entity';
import { EditPeloTipoDto } from '../pelo-tipo/dto/edit-pelo-tipo.dto';
import { EditPeloColorDto } from './dto/edit-pelo-color.dto';
import { CreatePeloColorDto } from './dto/create-pelo-color.dto';

@Injectable()
export class PeloColorService {
    
    constructor(
        @InjectRepository(PeloColor)
        private readonly peloColorRepository: Repository<PeloColor>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla PELO-COLOR
     * @returns 
     */
    async getAll(){
        return await this.peloColorRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla PELO-COLOR según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.peloColorRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditPeloColorDto){
        const respuesta = await this.peloColorRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Color de Pelo que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla PELO-COLOR según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.peloColorRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Color de Pelo que desea eliminar");
        return await this.peloColorRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla PELO-COLOR
     * @param data 
     * @returns 
     */
    async createOne(data: CreatePeloColorDto){
        const existe = await this.peloColorRepository.findOne({pelo_color: data.pelo_color});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.peloColorRepository.create(data);
        return await this.peloColorRepository.save(nuevo)
    }
}
