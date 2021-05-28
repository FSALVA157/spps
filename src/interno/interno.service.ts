import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Interno } from './entities/interno.entity';
import { EditInternoDto } from './dto/edit-interno.dto';
import { CreateInternoDto } from './dto/create-interno.dto';

@Injectable()
export class InternoService {
    constructor(
        @InjectRepository(Interno)
        private readonly internoRepository: Repository<Interno>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla INTERNO
     * @returns 
     */
    async getAll(){
        //const [data, total] = await this.internoRepository.findAndCount();
        return await this.internoRepository.findAndCount();
    }

    
    /**
     * Servicio que retorna un registro de la tabla INTERNO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.internoRepository.findOneOrFail(id);
    }

    async editOne(id: number, data: EditInternoDto){
        const respuesta = await this.internoRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Interno que intenta modificar");
        return respuesta;
    }

    /**
     * Servicio que elimina un registro de la tabla INTERNO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.internoRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Interno que desea eliminar");
        return await this.internoRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla INTERNO
     * @param data 
     * @returns 
     */
    async createOne(data: CreateInternoDto){
        const existe = await this.internoRepository.findOne({prontuario: data.prontuario});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe (prontuario existente)");
        //data.fecha_nacimiento = new Date(2000,3,22);
        const nuevo = this.internoRepository.create(data);
        return await this.internoRepository.save(nuevo)
    }

    //METODO PLANILLA ANTECEDENTES
    async getPlanillaAntecedentes(in_prontuario:number){
        let interno: Interno;
        interno= await this.internoRepository.findOneOrFail({prontuario: in_prontuario});
        console.log("ineterno", interno);
        return await this.internoRepository.findOneOrFail({prontuario: in_prontuario});

    }
    //FIN METODO PLANILLA ANTECEDENTES
}
