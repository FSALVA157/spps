import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NarizForma } from './entities/nariz-forma.entity';
import { EditNarizFormaDto } from './dto/edit-nariz-forma.dto';
import { CreateNarizFormaDto } from './dto/create-nariz-forma.dto';

@Injectable()
export class NarizFormaService {
    constructor(
        @InjectRepository(NarizForma)
        private readonly narizFormaRepository: Repository<NarizForma>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla NARIZ-FORMA
     * @returns 
     */
    async getAll(){
        return await this.narizFormaRepository.find();
    }

    /**
     * Servicio que retorna un registro de la tabla NARIZ-FORMA según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.narizFormaRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditNarizFormaDto){
        const respuesta = await this.narizFormaRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Forma de Nariz que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla NARIZ-FORMA según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.narizFormaRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Forma de Nariz que desea eliminar");
        return await this.narizFormaRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla NARIZ-FORMA
     * @param data 
     * @returns 
     */
    async createOne(data: CreateNarizFormaDto){
        const existe = await this.narizFormaRepository.findOne({nariz_forma: data.nariz_forma});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.narizFormaRepository.create(data);
        return await this.narizFormaRepository.save(nuevo)
    }
}
