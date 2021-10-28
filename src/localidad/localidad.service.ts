import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EditLocalidadDto } from './dto/edit-localidad.dto';
import { Localidad } from './entities/localidad.entity';

@Injectable()
export class LocalidadService {

    constructor(
        @InjectRepository(Localidad)
        private readonly localidadRepository: Repository<Localidad>
    ){}


    async getAll(){
        try {
            return await this.localidadRepository.findAndCount();
        } catch (error ) {
                throw new Error(error.message);
                
        }
    }

    async getOne(id: number){
        try {
            return await this.localidadRepository.findOneOrFail(id);
        } catch (error) {
            throw new Error(error.message);            
        }
    }

    async editOne(id: number, data: EditLocalidadDto){
        try {
            return await this.localidadRepository.update(id, data);
        } catch (error) {
            throw new Error(error.message);            
        }
    }


}
