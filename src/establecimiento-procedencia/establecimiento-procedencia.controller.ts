import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { EstablecimientoProcedencia } from './entities/establecimiento-procedencia.entity';
import { EstablecimientoProcedenciaService } from './establecimiento-procedencia.service';
import { CreateEstablecimientoProcedenciaDto } from './dto/create-establecimiento-procedencia.dto';
import { EditEstablecimientoProcedenciaDto } from './dto/edit-establecimiento-procedencia.dto';

@Controller('establecimiento-procedencia')
export class EstablecimientoProcedenciaController {

    constructor(
        private readonly establecimientoProcedenciaService: EstablecimientoProcedenciaService
    ){}
    
    /**
     * Petición http que lista todos los registros
     * @returns 
     */
     @Get()
     async getAll(){
         return await this.establecimientoProcedenciaService.getAll();
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
         return await this.establecimientoProcedenciaService.getOne(id);
     }
 
     /**
      * Petición http que crea un nuevo registro
      * @param data 
      * @returns 
      */
     @Post()
     async create(
         @Body()
         data: CreateEstablecimientoProcedenciaDto
     ){
         return await this.establecimientoProcedenciaService.createOne(data);
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
         data: EditEstablecimientoProcedenciaDto
     ){
         return await this.establecimientoProcedenciaService.editOne(id, data);
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
         return await this.establecimientoProcedenciaService.deleteOne(id);
     }
}
