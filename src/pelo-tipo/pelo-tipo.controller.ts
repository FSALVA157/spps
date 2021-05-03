import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PeloTipoService } from './pelo-tipo.service';
import { CreatePeloTipoDto } from './dto/create-pelo-tipo.dto';
import { EditPeloTipoDto } from './dto/edit-pelo-tipo.dto';

@Controller('pelo-tipo')
export class PeloTipoController {
    constructor(
        private readonly peloTipoService: PeloTipoService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.peloTipoService.getAll();
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
        return await this.peloTipoService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreatePeloTipoDto
    ){
        return await this.peloTipoService.createOne(data);
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
        data: EditPeloTipoDto
    ){
        return await this.peloTipoService.editOne(id, data);
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
        return await this.peloTipoService.deleteOne(id);
    }

}
