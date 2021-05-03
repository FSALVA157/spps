import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TipoDelitoService } from './tipo-delito.service';
import { CreateTipoDelitoDto } from './dto/create-tipo-delito.dto';
import { EditTipoDelitoDto } from './dto/edit-tipo-delito.dto';

@Controller('tipo-delito')
export class TipoDelitoController {

    constructor(
        private readonly tipoDelitoService: TipoDelitoService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.tipoDelitoService.getAll();
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
        return await this.tipoDelitoService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateTipoDelitoDto
    ){
        return await this.tipoDelitoService.createOne(data);
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
        data: EditTipoDelitoDto
    ){
        return await this.tipoDelitoService.editOne(id, data);
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
        return await this.tipoDelitoService.deleteOne(id);
    }
}
