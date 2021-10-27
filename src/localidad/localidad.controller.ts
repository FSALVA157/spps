import { BadRequestException, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
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

}
