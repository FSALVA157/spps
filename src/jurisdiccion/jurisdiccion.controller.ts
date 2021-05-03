import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { JurisdiccionService } from './jurisdiccion.service';
import { CreateJurisdiccionDto } from './dto/create-jurisdiccion.dto';
import { EditJurisdiccionDto } from './dto/edit-jurisdiccion.dto';

@Controller('jurisdiccion')
export class JurisdiccionController {

    constructor(
        private readonly jurisdiccionService: JurisdiccionService
    ){}
    
    /**
     * Petición http que lista todos los registros
     * @returns 
     */
     @Get()
     async getAll(){
         return await this.jurisdiccionService.getAll();
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
         return await this.jurisdiccionService.getOne(id);
     }
 
     /**
      * Petición http que crea un nuevo registro
      * @param data 
      * @returns 
      */
     @Post()
     async create(
         @Body()
         data: CreateJurisdiccionDto
     ){
         return await this.jurisdiccionService.createOne(data);
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
         data: EditJurisdiccionDto
     ){
         return await this.jurisdiccionService.editOne(id, data);
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
         return await this.jurisdiccionService.deleteOne(id);
     }
}
