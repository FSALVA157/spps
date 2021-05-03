import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UnidadService } from '../unidad/unidad.service';
import { CreateUnidadDto } from '../unidad/dto/create-unidad.dto';
import { EditUnidadDto } from '../unidad/dto/edit-unidad.dto';
import { PabellonService } from './pabellon.service';
import { CreatePabellonDto } from './dto/create-pabellon.dto';
import { EditPabellonDto } from './dto/edit-pabellon.dto';

@Controller('pabellon')
export class PabellonController {

    constructor(
        private readonly pabellonService: PabellonService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.pabellonService.getAll();
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
        return await this.pabellonService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreatePabellonDto
    ){
        return await this.pabellonService.createOne(data);
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
        data: EditPabellonDto
    ){
        return await this.pabellonService.editOne(id, data);
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
        return await this.pabellonService.deleteOne(id);
    }
}
