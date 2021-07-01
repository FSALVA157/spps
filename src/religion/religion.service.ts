import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Religion } from './entities/religion.entity';
import { EditReligionDto } from './dto/edit-religion.dto';
import { CreateReligionDto } from './dto/create-religion.dto';

@Injectable()
export class ReligionService {
    constructor(
        @InjectRepository(Religion)
        private readonly religionRepository: Repository<Religion>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla RELIGION
     * @returns 
     */
    async getAll(){
        return await this.religionRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla RELIGION según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.religionRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditReligionDto){
        const respuesta = await this.religionRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Religion que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla RELIGION según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.religionRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Religion que desea eliminar");
        return await this.religionRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla RELIGION
     * @param data 
     * @returns 
     */
    async createOne(data: CreateReligionDto){
        const existe = await this.religionRepository.findOne({religion: data.religion});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.religionRepository.create(data);
        return await this.religionRepository.save(nuevo)
    }
}
