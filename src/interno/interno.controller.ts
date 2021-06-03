import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, Res } from '@nestjs/common';
import { InternoService } from './interno.service';
import { CreateInternoDto } from './dto/create-interno.dto';
import { EditInternoDto } from './dto/edit-interno.dto';
import {Request, Response} from 'express';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/entities/usuario.entity';

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
    //FIN Petición http que lista todos los registros

    //METODO PARA RETORNAR INTERNOS POR UNIDAD
    @Get('buscar-por-unidad')
    async getInternosXUnidad(@Req() req: Request){  
        try {
            if(!req.query.id_unidad){
                throw new Error('Debe proporcionar la unidad');
            }
            const id_unidad: number = parseInt(req.query.id_unidad.toString());
            return await this.internoService.getInternosByUnidad(id_unidad);
                    
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    //FIN METODO PARA RETORNAR INTERNOS POR UNIDAD

    //METODO PARA RETORNAR INTERNOS POR UNIDAD DEL USUARIO
    // @Get('buscar-por-unidad-usuario')
    // async getInternosXUnidadUsuario(@Req() req: Request){  
    //     let usuario: Usuario = null;
    //     try {
    //         if(!req.query.email){
    //             throw new Error('Debe proporcionar el email del usuario');
    //         }
    //         const email = req.query.email.toString();
    //         usuario = await this.usuarioService.getUserByEmail(email);
                    
    //     } catch (error) {
    //         throw new BadRequestException(error.message);
    //     }

    //     if(usuario){
    //         return await this.internoService.getInternosByUnidad(usuario.unidad_id);
    //     }
    //     else{
    //         return await this.internoService.getInternosByUnidad(0);
    //     }     

    // }

    //FIN METODO PARA RETORNAR INTERNOS POR UNIDAD DEL USUARIO

    //PETICION HTTP PARA RETORNAR PLANILLA ANTECEDENTES    
    @Get('planilla-antecedentes')
    async getPlanillaAntecedentes(@Req() req: Request){  
        try {
            if(!req.query.prontuario){
                throw new Error('Debe proporcionar el prontuario');
            }
            const prontuario: number = parseInt(req.query.prontuario.toString());
            return await this.internoService.getPlanillaAntecedentes(prontuario);
                    
        } catch (error) {
            throw new BadRequestException(error.message);
        }
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
    //FIN Petición http que devuelve un registro según id

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
    //FIN Petición http que crea un nuevo registro

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
    //FIN Petición http que edita un registro según id

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
    //FIN Petición http que elimina un registro según id


}


