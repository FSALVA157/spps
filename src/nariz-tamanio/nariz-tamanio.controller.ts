import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { NarizTamanioService } from './nariz-tamanio.service';
import { CreateNarizTamanioDto } from './dto/create-nariz-tamanio.dto';
import { EditNarizTamanioDto } from './dto/edit-nariz-tamanio.dto';

@Controller('nariz-tamanio')
export class NarizTamanioController {
    constructor(
        private readonly narizTamanioService: NarizTamanioService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.narizTamanioService.getAll();
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
        return await this.narizTamanioService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateNarizTamanioDto
    ){
        return await this.narizTamanioService.createOne(data);
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
        data: EditNarizTamanioDto
    ){
        return await this.narizTamanioService.editOne(id, data);
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
        return await this.narizTamanioService.deleteOne(id);
    }


}
