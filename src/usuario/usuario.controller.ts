import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { EditUsuarioDto } from './dto/edit-usuario.dto';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuid } from 'uuid';
import {Request, Response} from 'express';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {

    constructor(
        private readonly usuarioService: UsuarioService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.usuarioService.getAll();
    }
    //--------

    //METODO PARA RETORNAR USUARIOS POR UNIDAD
    @Get('buscar-por-unidad')
    async getUsuariosXUnidad(@Req() req: Request){  
        try {
            if(!req.query.id_unidad){
                throw new Error('Debe proporcionar la unidad');
            }
            const id_unidad: number = parseInt(req.query.id_unidad.toString());
            
            return await this.usuarioService.getUsersByUnidad(id_unidad);
                    
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    //FIN METODO PARA RETORNAR USUARIOS POR UNIDAD
    //--------

    //METODO PARA RETORNAR USUARIOS POR UNIDAD DEL ADMINISTRADOR
    @Get('buscar-por-unidad-admin')
    async getUsuariosXUnidadParamEmail(@Req() req: Request){  
        let usuario: Usuario= null;
        let email: string= "";
        
        try {
            if(!req.query.email){
                throw new Error('Debe proporcionar el email del usuario');
            }
            email = req.query.email.toString();
            usuario = await this.usuarioService.getUserByEmail(email);
                    
        } catch (error) {
            throw new BadRequestException(error.message);
        }

        if(usuario){
            return await this.usuarioService.getUsersByUnidad(usuario.unidad_id);
        }
        else{
            return await this.usuarioService.getUsersByUnidad(0);
        }     
        
    }
    //FIN METODO PARA RETORNAR USUARIOS POR UNIDAD DEL ADMINISTRADOR
    //--------

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
                throw new Error('Debe proporcionar el nombre de la foto del Usuario');
            }
            const nombre_foto: string = req.query.foto_nombre.toString();
            
            const ruta = this.usuarioService.getFoto(nombre_foto);
            
            res.sendFile(ruta);
                    
        } catch (error) {
            throw new BadRequestException(error.message);
        }
     }
    //FIN PARA RETORNAR ARCHIVO POR IMAGEN
    //--------

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
        return await this.usuarioService.getOne(id);
    }
    //--------

    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateUsuarioDto
    ){
        return await this.usuarioService.createOne(data);
    }
    //--------

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
        data: EditUsuarioDto
    ){
        return await this.usuarioService.editOne(id, data);
    }
    //--------

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
        return await this.usuarioService.deleteOne(id);
    }
    //-----------------------------------------------------

    //METODO CARGAR IMAGEN
    @Post('foto')
    @UseInterceptors(
        FileInterceptor(
            'foto_carga',{
                storage: diskStorage({
                    destination: path.join(__dirname,'../../users-pictures'),
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
            if(req.query.id === null || foto === null){
                    throw new Error;
            }
            const id: number = parseInt(req.query.id.toString());
            
            console.log(foto);
            return await this.usuarioService.cargarFoto(foto.filename, id);
            
        } catch (error) {

            throw new BadRequestException(req.query.id +'No olvide adjuntar un archivo imagen y el parámetro id del  usuario!!');
        }
    }
    //FIN METODO CARGAR IMAGEN
    //------------------------

    
}
