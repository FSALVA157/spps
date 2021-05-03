import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { JuzgadoService } from './juzgado.service';
import { CreateJuzgadoDto } from './dto/create-juzgado.dto';
import { EditJuzgadoDto } from './dto/edit-juzgado.dto';

@Controller('juzgado')
export class JuzgadoController {

    constructor(
        private readonly juzgadoService: JuzgadoService
    ){}
    
    /**
     * Petición http que lista todos los registros
     * @returns 
     */
     @Get()
     async getAll(){
         return await this.juzgadoService.getAll();
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
         return await this.juzgadoService.getOne(id);
     }
 
     /**
      * Petición http que crea un nuevo registro
      * @param data 
      * @returns 
      */
     @Post()
     async create(
         @Body()
         data: CreateJuzgadoDto
     ){
         return await this.juzgadoService.createOne(data);
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
         data: EditJuzgadoDto
     ){
         return await this.juzgadoService.editOne(id, data);
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
         return await this.juzgadoService.deleteOne(id);
     }
}
