import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
            return new Error(error.message);
        }
    }


}
