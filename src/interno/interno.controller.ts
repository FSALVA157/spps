import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { InternoService } from './interno.service';
import { CreateInternoDto } from './dto/create-interno.dto';
import { EditInternoDto } from './dto/edit-interno.dto';

@Controller('interno')
export class InternoController {
    constructor(
        private readonly internoService: InternoService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.internoService.getAll();
    }

    //RETORNAR PLANILLA ANTECEDENTES
    @Get('planilla-antecedentes')
    async getPlanillaAntecedentes(
        @Param('prontuario',ParseIntPipe)
        prontuario: number
    ){
        return await this.internoService.getPlanillaAntecedentes(prontuario);
    }
    //FIN RETORNAR PLANILLA ANTECEDENTES


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
        return await this.internoService.getOne(id);
    }

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateInternoDto
    ){
        return await this.internoService.createOne(data);
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
        data: EditInternoDto
    ){
        return await this.internoService.editOne(id, data);
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
        return await this.internoService.deleteOne(id);
    }



}


