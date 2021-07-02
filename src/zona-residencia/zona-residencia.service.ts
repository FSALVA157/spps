import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ZonaResidencia } from './entities/zona-residencia.entity';
import { Repository } from 'typeorm';
import { EditZonaResidenciaDto } from './dto/edit-zona-residencia.dto';
import { CreateZonaResidenciaDto } from './dto/create-zona-residencia.dto';

@Injectable()
export class ZonaResidenciaService {
    
    constructor(
        @InjectRepository(ZonaResidencia)
        private readonly zonaResidenciaRepository: Repository<ZonaResidencia>
    ){ }
    
    
    /**
     * Servicio que retorna todos los registros de la tabla ZONA-RESIDENCIA 
     * @returns 
     */
    
    async getAll(){
        return await this.zonaResidenciaRepository.find();
    }
    
    /**
     * Servicio que retorna un registro de la tabla ZONA-RESIDENCIA según ID
     * @param id 
     * @returns 
     */
    
    async getOne(id:number){
        return await this.zonaResidenciaRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditZonaResidenciaDto){
        const respuesta = await this.zonaResidenciaRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Zona de Residencia que intenta modificar");
        return respuesta;
    }
    

    /**
     * Servicio que elimina un registro de la tabla ZONA-RESIDENCIA según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    
    async deleteOne(id: number){
        const respuesta = await this.zonaResidenciaRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro ZONA-RESIDENCIA que desea eliminar");
        return await this.zonaResidenciaRepository.remove(respuesta);        
    }
    

    /**
     * Servicio que crea un nuevo registro de la tabla SEXO
     * @param data 
     * @returns 
     */
    
    async createOne(data: CreateZonaResidenciaDto){
        const existe = await this.zonaResidenciaRepository.findOne({zona_residencia: data.zona_residencia});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.zonaResidenciaRepository.create(data);
        return await this.zonaResidenciaRepository.save(nuevo)
    }
    

}
