import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pabellon } from './entities/pabellon.entity';
import { CreatePabellonDto } from './dto/create-pabellon.dto';
import { EditPabellonDto } from './dto/edit-pabellon.dto';

@Injectable()
export class PabellonService {
    
    constructor(
        @InjectRepository(Pabellon)
        private readonly pabellonRepository: Repository<Pabellon>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla SEXO
     * @returns 
     */
    async getAll(){
        return await this.pabellonRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla SEXO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.pabellonRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditPabellonDto){
        const respuesta = await this.pabellonRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Unidad que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla SEXO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.pabellonRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Unidad que desea eliminar");
        return await this.pabellonRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla SEXO
     * @param data 
     * @returns 
     */
    async createOne(data: CreatePabellonDto){
        const existe = await this.pabellonRepository.findOne({pabellon: data.pabellon});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.pabellonRepository.create(data);
        return await this.pabellonRepository.save(nuevo)
    }
}
