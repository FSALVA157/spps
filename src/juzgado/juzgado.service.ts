import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Juzgado } from './entities/juzgado.entity';
import { EditJuzgadoDto } from './dto/edit-juzgado.dto';
import { CreateJuzgadoDto } from './dto/create-juzgado.dto';

@Injectable()
export class JuzgadoService {

    constructor(
        @InjectRepository(Juzgado)
        private readonly juzgadoRepository: Repository<Juzgado>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla JURISDICCION
     * @returns 
     */
    async getAll(){
        return await this.juzgadoRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla JURISDICCION según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.juzgadoRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditJuzgadoDto){
        const respuesta = await this.juzgadoRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el Juzgado de Etnia que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla JURISDICCION según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.juzgadoRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro de Juzgado que desea eliminar");
        return await this.juzgadoRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla JURISDICCION 
     * @param data 
     * @returns 
     */
    async createOne(data: CreateJuzgadoDto){
        const existe = await this.juzgadoRepository.findOne({juzgado: data.juzgado});
        if(existe) throw new BadRequestException("El registro que Juzgado crear ya existe");
        const nuevo = this.juzgadoRepository.create(data);
        return await this.juzgadoRepository.save(nuevo)
    }
}
