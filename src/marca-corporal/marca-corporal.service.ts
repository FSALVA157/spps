import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EditMarcaCorporalDto } from './dto/edit-marca-corporal.dto';
import { MarcaCorporal } from './entities/marca-corporal.entity';
import { CreateMarcaCorporalDto } from './dto/create-marca-corporal.dto';

@Injectable()
export class MarcaCorporalService {

    constructor(
        @InjectRepository(MarcaCorporal)
        private readonly marcaRepository: Repository<MarcaCorporal>
    ){}


    /**
     * Servicio que lista las marcas corporales
     * @returns 
     */
    async getAll(){
        try {
            return await this.marcaRepository.findAndCount();
        } catch (error) {
            throw new Error(error.message);
                
        }
    }

    /**
     * Servicio que muestra un registro segun Id
     * @param id 
     * @returns 
     */
    async getOne(id: number){
        try {
            return await this.marcaRepository.findOneOrFail(id);            
        } catch (error) {
            throw new Error(error.message);            
        }
    }


    /**
     * Servicio que edita un registro de la tabla Marcas
     * @param id 
     * @param data 
     */
    async editOne(id: number, data: EditMarcaCorporalDto){
        try {
            const respuesta =  await this.marcaRepository.update(id, data);
            if((await respuesta).affected == 0){
                throw new Error("No existe el registro seleccionado para modificar");                
            };
            return respuesta;
        } catch (error) {
            throw new Error(error.message);            
        }
    }

    /**
     * Servicio que elimina un registro de la tabla JURISDICCION según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
     async deleteOne(id: number){
        const respuesta = await this.marcaRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro de Juzgado que desea eliminar");
        return await this.marcaRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla JURISDICCION 
     * @param data 
     * @returns 
     */
    async createOne(data: CreateMarcaCorporalDto){
        const existe = await this.marcaRepository.findOne({detalle: data.detalle});
        if(existe) throw new BadRequestException("El registro marca corporal ya existe");
        const nuevo = this.marcaRepository.create(data);
        return await this.marcaRepository.save(nuevo)
    }



}
