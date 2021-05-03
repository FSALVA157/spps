import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ReincidenciaService } from './reincidencia.service';
import { CreateReincidenciaDto } from './dto/create-reincidencia.dto';
import { EditReincidenciaDto } from './dto/edit-reincidencia.dto';

@Controller('reincidencia')
export class ReincidenciaController {

    constructor(
        private readonly reincidenciaService: ReincidenciaService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.reincidenciaService.getAll();
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
        return await this.reincidenciaService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateReincidenciaDto
    ){
        return await this.reincidenciaService.createOne(data);
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
        data: EditReincidenciaDto
    ){
        return await this.reincidenciaService.editOne(id, data);
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
        return await this.reincidenciaService.deleteOne(id);
    }
}
