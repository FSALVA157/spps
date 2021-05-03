import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { EstadoProcesalService } from './estado-procesal.service';
import { CreateEstadoProcesalDto } from './dto/create-estado-procesal.dto';
import { EditEstadoProcesalDto } from './dto/edit-estado-procesal.dto';

@Controller('estado-procesal')
export class EstadoProcesalController {

    constructor(
        private readonly estadoProcesalService: EstadoProcesalService
    ){}
    
    /**
     * Petición http que lista todos los registros
     * @returns 
     */
     @Get()
     async getAll(){
         return await this.estadoProcesalService.getAll();
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
         return await this.estadoProcesalService.getOne(id);
     }
 
     /**
      * Petición http que crea un nuevo registro
      * @param data 
      * @returns 
      */
     @Post()
     async create(
         @Body()
         data: CreateEstadoProcesalDto
     ){
         return await this.estadoProcesalService.createOne(data);
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
         data: EditEstadoProcesalDto
     ){
         return await this.estadoProcesalService.editOne(id, data);
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
         return await this.estadoProcesalService.deleteOne(id);
     }
}
