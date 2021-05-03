import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { NacionalidadService } from './nacionalidad.service';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';
import { EditNacionalidadDto } from './dto/edit-nacionalidad.dto';

@Controller('nacionalidad')
export class NacionalidadController {
    constructor(
        private readonly nacionalidadService: NacionalidadService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.nacionalidadService.getAll();
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
        return await this.nacionalidadService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateNacionalidadDto
    ){
        return await this.nacionalidadService.createOne(data);
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
        data: EditNacionalidadDto
    ){
        return await this.nacionalidadService.editOne(id, data);
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
        return await this.nacionalidadService.deleteOne(id);
    }


}
