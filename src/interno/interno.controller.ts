import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { InternoService } from './interno.service';
import { CreateInternoDto } from './dto/create-interno.dto';
import { EditInternoDto } from './dto/edit-interno.dto';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuid } from 'uuid';
import {Request, Response} from 'express';




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
    //----------------------------------

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
    //----------------------------------

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
    //----------------------------------

    //PETICION HTTP PARA RETORNAR PLANILLA ANTECEDENTES    
    //@Get('planilla-antecedentes')
    // @Get('planillas')
    // async getPlanillaAntecedentes(@Req() req: Request){  
    //     try {
    //         if(!req.query.prontuario){
    //             throw new Error('Debe proporcionar el prontuario');
    //         }
    //         const prontuario: number = parseInt(req.query.prontuario.toString());
    //         //return await this.internoService.getPlanillaAntecedentes(prontuario);
    //         return await this.internoService.planilla(prontuario);
                    
    //     } catch (error) {
    //         throw new BadRequestException(error.message);
    //     }
    // }
    //FIN RETORNAR PLANILLA ANTECEDENTES
    //----------------------------------

    //RETORNAR PLANILLA
    @Get('planilla')
    async getPlanilla(@Req() req: Request){
        //console.log('REQUEST: ', req);
        try {           
           const prontuario: number = parseInt(req.query.prontuario.toString());
            return await this.internoService.planilla(prontuario)
                           .then((result) => {
                               if (result){
                                   
                                   return result;
                               }
                               else{
                                   throw new NotFoundException();
                                   
                               }
                           });
        } catch (error) {
            throw new BadRequestException(error.message);                     
        }
    }

    //RETORNAR INTERNO X PRONTUARIO
    @Get('interno')
    async getInterno(@Req() req: Request){
        //console.log('REQUEST: ', req);
        try {           
           const prontuario: number = parseInt(req.query.prontuario.toString());
            return await this.internoService.getInternoXProntuario(prontuario)
                           .then((result) => {
                               if (result){
                                   return result;
                               }
                               else{
                                   throw new NotFoundException();
                                   
                               }
                           });
        } catch (error) {
            throw new BadRequestException(error.message);                     
        }
    }
    //FIN RETORNAR INTERNO X PRONTUARIO....................................

    //METODO PARA RETORNAR ARCHIVO IMAGEN DEL USUARIO
    @Get('foto')
     getFotos(
        @Req()
        req: Request,
        @Res()
        res: Response
     ){        
        try {
            if(!req.query.foto_nombre){
                throw new Error('Debe proporcionar el nombre de la foto del Internoxxx');
            }
            const nombre_foto: string = req.query.foto_nombre.toString();
            
            const ruta = this.internoService.getFoto(nombre_foto);
            
            res.sendFile(ruta);
                    
        } catch (error) {
            throw new BadRequestException(error.message);
        }
     }
    //FIN PARA RETORNAR ARCHIVO POR IMAGEN
    //------------------------------------


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
    //----------------------------------

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
    //----------------------------------

    /**
     * Petición http que edita un registro según id
     * @param id 
     * @param data 
     * @returns 
     */
    @Put(':prontuario')
    async editOne(
        @Param('prontuario',ParseIntPipe)
        prontuario: number,
        @Body()
        data: EditInternoDto
    ){
        return await this.internoService.editOne(prontuario, data);
    }
    //FIN Petición http que edita un registro según id
    //----------------------------------

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
    //--------------------------------------------------

     //METODO CARGAR IMAGEN
     @Post('foto')
     @UseInterceptors(
         FileInterceptor(
             'foto_carga',{
                 storage: diskStorage({
                     destination: path.join(__dirname,'../../pictures/internos'),
                         filename: (req, file, cb) => {
                             cb(null, uuid() + path.extname(file.originalname))
                         },
                     },
                 ),
                 fileFilter: (req, file, cb) => {                    
                     if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
                                         return cb(new HttpException('Formato de archivo inválido (jpg|jpeg|png|gif)', HttpStatus.BAD_REQUEST),false);
                                     
                     }
                         cb(null, true);                                               
                     }
             }
         )   
     )
     async cargarFoto(
         @UploadedFile()
         foto: Express.Multer.File,
         @Req()
         req: Request,    
     ){
         try {
             if(req.query.prontuario === null || foto === null){
                     throw new Error;
             }
             const prontuario: number = parseInt(req.query.prontuario.toString());
             
             console.log(foto);
             console.log("PRONTUARIO",prontuario);
             return await this.internoService.cargarFoto(foto.filename, prontuario);
             
         } catch (error) {
 
             throw new BadRequestException(req.query.id +'No olvide adjuntar un archivo imagen y el parámetro id del  usuario!!');
         }
     }
     //FIN METODO CARGAR IMAGEN
     //------------------------

     

    }