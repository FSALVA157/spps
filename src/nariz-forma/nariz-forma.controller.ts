import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { NarizFormaService } from './nariz-forma.service';
import { CreateNarizFormaDto } from './dto/create-nariz-forma.dto';
import { EditNarizFormaDto } from './dto/edit-nariz-forma.dto';

@Controller('nariz-forma')
export class NarizFormaController {
    constructor(
        private readonly narizFormaService: NarizFormaService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.narizFormaService.getAll();
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
        return await this.narizFormaService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateNarizFormaDto
    ){
        return await this.narizFormaService.createOne(data);
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
        data: EditNarizFormaDto
    ){
        return await this.narizFormaService.editOne(id, data);
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
        return await this.narizFormaService.deleteOne(id);
    }

}
