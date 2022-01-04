import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisitaDto } from './dto/create-visita.dto';
import { EditVisitaDto } from './dto/edit-visita.dto';
import { Visita } from './entities/visita.entity';


@Injectable()
export class VisitaService {

  constructor(
    @InjectRepository(Visita)
    private readonly visitaRepository: Repository<Visita>
  ){}

  async create(createVisitaDto: CreateVisitaDto) {
    try {
      const existe = await this.visitaRepository.findOne({
        where: [{dni: createVisitaDto.dni}]
      });
      if(existe){
        throw new Error('La Visita que intenta registrar ya existe!');
      }
      const data = await this.visitaRepository.create(createVisitaDto);
      return await this.visitaRepository.save(data);
    } catch (error) {
        throw new BadRequestException(error.message);
        
    }
  }

  async findAll() {
    try {
      return await this.visitaRepository.findAndCount({
        order: {
          apellido_1: "ASC"
        }
      });
    } catch (error) {
      throw new BadRequestException(error.message);      
    }
  }

  async findOne(dniDato: number) {
    try {
      return await this.visitaRepository.findOneOrFail({
        where: [
           {dni: dniDato}
        ]
      });
    } catch (error) {
      throw new BadRequestException(error.message);      
    }
  }

  async update(dniDato: number, updateVisitaDto: EditVisitaDto) {
    try {
      return await this.visitaRepository.update({
        dni: dniDato
      }, updateVisitaDto);
    } catch (error) {
      throw new BadRequestException(error.message);      
    }
  }

  async remove(dniDato: number) {
    try {
      return await this.visitaRepository.softDelete({
        dni: dniDato
      });
    } catch (error) {
      throw new BadRequestException(error.message);      
    }
  }
}
