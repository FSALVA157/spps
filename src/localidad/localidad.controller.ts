import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Put } from '@nestjs/common';
import { EditLocalidadDto } from './dto/edit-localidad.dto';
import { LocalidadService } from './localidad.service';

@Controller('localidad')
export class LocalidadController {

    constructor(
        private readonly localidadService: LocalidadService
    ){}

    @Get()
    async getAll(){
        try {
            return await this.localidadService.getAll()
            .then((result) => {
                    if(result){
                        return result;
                    }else{
                        throw new HttpException('No se ha obtenido un listado de localidades', HttpStatus.NOT_FOUND)
                    }
            })
            .catch(
                (error) => {
                    throw new Error(error.message);
                    
                }
            );
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND, );
        }
    }

    @Get(':id')
    async getOne(
        @Param('id', ParseIntPipe)
        id: number
    ){
        try {
            return await this.localidadService.getOne(id)
                        .then((result) => {
                            if(result){
                                return result;
                            }else{
                                throw new NotFoundException('No existe la localidad buscada');                                
                            }
                        })
                        .catch((error) => {
                            throw new Error(error.message);                            
                        });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
            
        }
    }

    @Put(':id')
    async editOne(
        @Param('id', ParseIntPipe)
        id: number,
        @Body()
        data: EditLocalidadDto
    ){
          try {
                return await this.localidadService.editOne(id, data)
                                .then((result) => {
                                    if(result){
                                        return result;
                                    }else{
                                        throw new NotFoundException("No Existe el registro de Localidad que intenta modificar");
                                        
                                    }
                                })
                                .catch((error) => {
                                    throw new Error(error.message);
                                    
                                });
            } catch (error) {
                throw new HttpException(error.message, HttpStatus.NOT_FOUND);
                
            }
    }

}
