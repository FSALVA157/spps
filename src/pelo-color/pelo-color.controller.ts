import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PeloColorService } from './pelo-color.service';
import { CreatePeloColorDto } from './dto/create-pelo-color.dto';
import { EditPeloColorDto } from './dto/edit-pelo-color.dto';

@Controller('pelo-color')
export class PeloColorController {

    constructor(
        private readonly peloColorService: PeloColorService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.peloColorService.getAll();
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
        return await this.peloColorService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreatePeloColorDto
    ){
        return await this.peloColorService.createOne(data);
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
        data: EditPeloColorDto
    ){
        return await this.peloColorService.editOne(id, data);
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
        return await this.peloColorService.deleteOne(id);
    }

}
