import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoCondena } from './entities/tipo-condena.entity';
import { EditTipoCondenaDto } from './dto/edit-tipo-condena.dto';
import { CreateTipoCondenaDto } from './dto/create-tipo-condena.dto';

@Injectable()
export class TipoCondenaService {

    constructor(
        @InjectRepository(TipoCondena)
        private readonly tipoCondenaRepository: Repository<TipoCondena>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla TIPO-CONDENA
     * @returns 
     */
    async getAll(){
        return await this.tipoCondenaRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla TIPO-CONDENA según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.tipoCondenaRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditTipoCondenaDto){
        const respuesta = await this.tipoCondenaRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro Tipo de Condena que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla TIPO-CONDENA según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.tipoCondenaRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro SEXO que desea eliminar");
        return await this.tipoCondenaRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla TIPO-CONDENA
     * @param data 
     * @returns 
     */
    async createOne(data: CreateTipoCondenaDto){
        const existe = await this.tipoCondenaRepository.findOne({tipo_condena: data.tipo_condena});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.tipoCondenaRepository.create(data);
        return await this.tipoCondenaRepository.save(nuevo)
    }
}
