import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TipoCondenaService } from './tipo-condena.service';
import { CreateTipoCondenaDto } from './dto/create-tipo-condena.dto';
import { EditTipoCondenaDto } from './dto/edit-tipo-condena.dto';

@Controller('tipo-condena')
export class TipoCondenaController {

    constructor(
        private readonly tipoCondenaService: TipoCondenaService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.tipoCondenaService.getAll();
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
        return await this.tipoCondenaService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateTipoCondenaDto
    ){
        return await this.tipoCondenaService.createOne(data);
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
        data: EditTipoCondenaDto
    ){
        return await this.tipoCondenaService.editOne(id, data);
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
        return await this.tipoCondenaService.deleteOne(id);
    }
}
