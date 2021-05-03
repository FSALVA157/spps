import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TipoDefensorService } from './tipo-defensor.service';
import { CreateTipoDefensorDto } from './dto/create-tipo-defensor.dto';
import { EditTipoDefensorDto } from './dto/edit-tipo-defensor.dto';

@Controller('tipo-defensor')
export class TipoDefensorController {

    constructor(
        private readonly tipoDefensorService: TipoDefensorService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.tipoDefensorService.getAll();
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
        return await this.tipoDefensorService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateTipoDefensorDto
    ){
        return await this.tipoDefensorService.createOne(data);
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
        data: EditTipoDefensorDto
    ){
        return await this.tipoDefensorService.editOne(id, data);
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
        return await this.tipoDefensorService.deleteOne(id);
    }
}
