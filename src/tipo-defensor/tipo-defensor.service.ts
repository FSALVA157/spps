import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoDefensor } from './entities/tipo-defensor.entity';
import { EditTipoDefensorDto } from './dto/edit-tipo-defensor.dto';
import { CreateTipoDefensorDto } from './dto/create-tipo-defensor.dto';

@Injectable()
export class TipoDefensorService {

    constructor(
        @InjectRepository(TipoDefensor)
        private readonly tipoDefensorRepository: Repository<TipoDefensor>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla TIPO-DEFENSOR
     * @returns 
     */
    async getAll(){
        return await this.tipoDefensorRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla TIPO-DEFENSOR según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.tipoDefensorRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditTipoDefensorDto){
        const respuesta = await this.tipoDefensorRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Tipo de Defensor que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla TIPO-DEFENSOR según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.tipoDefensorRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Tipo de Defensor que desea eliminar");
        return await this.tipoDefensorRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla TIPO-DEFENSOR
     * @param data 
     * @returns 
     */
    async createOne(data: CreateTipoDefensorDto){
        const existe = await this.tipoDefensorRepository.findOne({tipo_defensor: data.tipo_defensor});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.tipoDefensorRepository.create(data);
        return await this.tipoDefensorRepository.save(nuevo)
    }
}
