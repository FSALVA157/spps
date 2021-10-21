import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MarcaCorporalService } from './marca-corporal.service';
import { CreateMarcaCorporalDto } from './dto/create-marca-corporal.dto';
import { EditMarcaCorporalDto } from './dto/edit-marca-corporal.dto';

@Controller('marcas-corporales')
export class MarcaCorporalController {

    constructor(
        private readonly marcaCorporalService: MarcaCorporalService
    ){}
    
    /**
     * Petición http que lista todos los registros
     * @returns 
     */
     @Get()
     async getAll(){
         return await this.marcaCorporalService.getAll();
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
         return await this.marcaCorporalService.getOne(id);
     }
 
     /**
      * Petición http que crea un nuevo registro
      * @param data 
      * @returns 
      */
     @Post()
     async create(
         @Body()
         data: CreateMarcaCorporalDto
     ){
         return await this.marcaCorporalService.createOne(data);
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
         data: EditMarcaCorporalDto
     ){
         return await this.marcaCorporalService.editOne(id, data);
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
         return await this.marcaCorporalService.deleteOne(id);
     }
}
