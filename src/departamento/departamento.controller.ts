import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { EditDepartamentoDto } from './dto/edit-departamento.dto';

@Controller('departamento')
export class DepartamentoController { 

    constructor(
        private readonly departamentoService: DepartamentoService
    ){}
    
    /**
     * Petición http que lista todos los registros
     * @returns 
     */
     @Get()
     async getAll(){
         return await this.departamentoService.getAll();
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
         return await this.departamentoService.getOne(id);
     }
 
     /**
      * Petición http que crea un nuevo registro
      * @param data 
      * @returns 
      */
     @Post()
     async create(
         @Body()
         data: CreateDepartamentoDto
     ){
         return await this.departamentoService.createOne(data);
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
         data: EditDepartamentoDto
     ){
         return await this.departamentoService.editOne(id, data);
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
         return await this.departamentoService.deleteOne(id);
     }
}
