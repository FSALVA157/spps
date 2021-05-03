import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ZonaResidenciaService } from './zona-residencia.service';
import { CreateZonaResidenciaDto } from './dto/create-zona-residencia.dto';
import { EditZonaResidenciaDto } from './dto/edit-zona-residencia.dto';

@Controller('zona-residencia')
export class ZonaResidenciaController {
    constructor(
        private readonly zonaResidenciaService: ZonaResidenciaService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.zonaResidenciaService.getAll();
    }

    /**
     * Petición http que devuelve un registro según id
     * @param id 
     * @returns 
     */
    @Get(':id')
    async getOne(
        @Param('id',ParseIntPipe)
        id: number
    ){
        return await this.zonaResidenciaService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateZonaResidenciaDto
    ){
        return await this.zonaResidenciaService.createOne(data);
    }

    /**
     * Petición http que edita un registro según id
     * @param id 
     * @param data 
     * @returns 
     */
    @Put(':id')
    async editOne(
        @Param('id',ParseIntPipe)
        id: number,
        @Body()
        data: EditZonaResidenciaDto
    ){
        return await this.zonaResidenciaService.editOne(id, data);
    }

    /**
     * Petición http que elimina un registro según id
     * @param id 
     * @returns 
     */
    @Delete(':id')
    async deleteOne(
        @Param('id', ParseIntPipe)
        id: number
    ){
        return await this.zonaResidenciaService.deleteOne(id);
    }


}
