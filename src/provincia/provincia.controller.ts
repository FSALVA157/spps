import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { EditProvinciaDto } from './dto/edit-provincia.dto';

@Controller('provincia')
export class ProvinciaController {

    constructor(
        private readonly provinciaService: ProvinciaService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.provinciaService.getAll();
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
        return await this.provinciaService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateProvinciaDto
    ){
        return await this.provinciaService.createOne(data);
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
        data: EditProvinciaDto
    ){
        return await this.provinciaService.editOne(id, data);
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
        return await this.provinciaService.deleteOne(id);
    }
}
