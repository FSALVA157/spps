import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EditMarcaCorporalDto } from './dto/edit-marca-corporal.dto';
import { MarcaCorporal } from './entities/marca-corporal.entity';

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



}
