import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { OjosTamanioService } from './ojos-tamanio.service';
import { CreateOjosTamanioDto } from './dto/create-ojos-tamanio.dto';
import { EditOjosTamanioDto } from './dto/edit-ojos-tamanio.dto';

@Controller('ojos-tamanio')
export class OjosTamanioController {
    constructor(
        private readonly ojosTamanioService: OjosTamanioService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.ojosTamanioService.getAll();
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
        return await this.ojosTamanioService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateOjosTamanioDto
    ){
        return await this.ojosTamanioService.createOne(data);
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
        data: EditOjosTamanioDto
    ){
        return await this.ojosTamanioService.editOne(id, data);
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
        return await this.ojosTamanioService.deleteOne(id);
    }


}
