import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Interno } from './entities/interno.entity';
import { EditInternoDto } from './dto/edit-interno.dto';
import { CreateInternoDto } from './dto/create-interno.dto';
import { PlanillaAntecedentes } from '../planilla-antecedentes/entities/planilla-antecedentes';
import { addListener } from 'node:process';
import * as fs from 'fs-extra';
import * as path from 'path';
import { SSL_OP_TLS_ROLLBACK_BUG } from 'node:constants';
import * as moment from 'moment';

@Injectable()
export class InternoService {
    constructor(
        @InjectRepository(Interno)
        private readonly internoRepository: Repository<Interno>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla INTERNO
     * @returns 
     */
    async getAll(){
        //const [data, total] = await this.internoRepository.findAndCount();
        return await this.internoRepository.findAndCount();
    }
    //----------------------------------

    
    /**
     * Servicio que retorna un registro de la tabla INTERNO según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        return await this.internoRepository.findOneOrFail(id);
    }
    //----------------------------------

    async editOne(id: number, data: EditInternoDto){
        const respuesta = await this.internoRepository.update(id,data);
        if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Interno que intenta modificar");
        return respuesta;
    }
    //----------------------------------

    async planilla(in_prontuario: number){
        try {
            return await this.internoRepository.findOneOrFail({prontuario: in_prontuario})
                                .then((interno) => {
                                        //let falta: any = interno.fecha_cumple.getTime() - (new Date().getTime());
                                        //const lleva: Object = this._getLleva(interno.fecha_cumple, interno.total_anios, interno.total_meses, interno.total_dias);
                                        return this._getCalculosPenado(interno);
                                })
                                .catch((error) => {
                                    throw new Error(error.message);
                                    
                                })
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * Servicio que elimina un registro de la tabla INTERNO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.internoRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro Interno que desea eliminar");
        return await this.internoRepository.remove(respuesta);        
    }
    //----------------------------------

    /**
     * Servicio que crea un nuevo registro de la tabla INTERNO
     * @param data 
     * @returns 
     */
    async createOne(data: CreateInternoDto){
        const existe = await this.internoRepository.findOne({prontuario: data.prontuario});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe (prontuario existente)");
        
        const nuevo = this.internoRepository.create(data);
        return await this.internoRepository.save(nuevo)
    }
    //----------------------------------

    //BUSCAR POR UNIDAD
    async getInternosByUnidad(id_unidad: number){
        return await this.internoRepository.findAndCount({unidad_id: id_unidad});
    }
    //FIN BUSCAR X UNIDAD
    //----------------------------------

    //METODO PLANILLA ANTECEDENTES
    // async getPlanillaAntecedentes(in_prontuario:number){
    //     let interno: Interno;        
    //     let planillaAntecedentes: PlanillaAntecedentes= new PlanillaAntecedentes;

    //     interno= await this.internoRepository.findOneOrFail({prontuario: in_prontuario});

    //     planillaAntecedentes.apellido_1 = interno.apellido_1;
    //     planillaAntecedentes.apellido_2= interno.apellido_2;
    //     planillaAntecedentes.nombre_1 = interno.nombre_1;
    //     planillaAntecedentes.nombre_2 = interno.nombre_2;
    //     planillaAntecedentes.nombre_3 = interno.nombre_3;
    //     planillaAntecedentes.prontuario = interno.prontuario;
    //     planillaAntecedentes.dni = interno.dni;
    //     planillaAntecedentes.fecha_nacimiento = interno.fecha_nacimiento;
    //     planillaAntecedentes.departamento = interno.departamento.departamento;
    //     planillaAntecedentes.provincia = interno.departamento.provincia.provincia;
    //     planillaAntecedentes.nacionalidad = interno.nacionalidad.nacionalidad;
    //     planillaAntecedentes.departamento_nacimiento = interno.departamento_nacimiento.departamento; 
    //     planillaAntecedentes.provincia_nacimiento = interno.departamento.provincia.provincia;
    //     planillaAntecedentes.unidad = interno.unidad.unidad;
    //     planillaAntecedentes.establecimiento_procedencia = interno.establecimiento_procedencia.establecimiento_procedencia;
    //     planillaAntecedentes.reingreo = interno.reingreso.reingreso;
    //     planillaAntecedentes.reingreso_num = interno.reingreso_num;
    //     planillaAntecedentes.fecha_ingreso = interno.fecha_ingreso;
    //     planillaAntecedentes.causa_penal = interno.causa_penal;
    //     planillaAntecedentes.tipo_condena = interno.tipo_condena.tipo_condena;
    //     planillaAntecedentes.expediente_numero = interno.expediente_numero;
    //     planillaAntecedentes.prontuario_policial = interno.prontuario_policial;
    //     planillaAntecedentes.estado_procesal = interno.estado_procesal.estado_procesal;
    //     planillaAntecedentes.tipo_delito = interno.tipo_delito.tipo_delito;
    //     planillaAntecedentes.jurisdiccion1 = interno.jurisdiccion1.jurisdiccion;
    //     planillaAntecedentes.reincidencia = interno.reincidencia.reincidencia;
    //     planillaAntecedentes.juzgado = interno.juzgado.juzgado;
    //     planillaAntecedentes.fecha_detencion = interno.fecha_detencion;
    //     planillaAntecedentes.juzgado_condena = interno.condena_juzgado.juzgado;
    //     planillaAntecedentes.total_anios = interno.total_anios;
    //     planillaAntecedentes.total_meses = interno.total_meses;
    //     planillaAntecedentes.total_dias = interno.total_dias;
    //     planillaAntecedentes.computo = interno.computo;
    //     planillaAntecedentes.fecha_cumple = interno.fecha_cumple;
    //     planillaAntecedentes.lleva_cumplido = "anios-meses-dias";
    //     planillaAntecedentes.falta_cumplir = "anios - meses - dias";
    //     planillaAntecedentes.conducta = "conducta";
    //     planillaAntecedentes.concepto = "concepto";
    //     planillaAntecedentes.periodo = "periodo";
    //     planillaAntecedentes.causas_penales_pendientes = "mas causas";
    //     planillaAntecedentes.salidas_transitorias = "salidas";
    //     planillaAntecedentes.sanciones_disciplinarias = "sanciones";
    //     planillaAntecedentes.conmutaciones = "conmutraciones";           
        
    //     return planillaAntecedentes;
    // }
    //FIN METODO PLANILLA ANTECEDENTES
    //----------------------------------

    //GUARDAR FOTO EN BASE DE DATOS
    //guarda el nombre de la foto en el campo foto del interno
    async cargarFoto(foto_url: string, id: number){
        const interno = await this.internoRepository.findOne({id_interno: id});
        if(!interno){
            throw new NotFoundException('No existe el interno al que intenta asignar la imagen');
           return; 
        }    
        
        //si ya existe una foto vamos a eliminarla de la carpeta de imagenes
        //`pictures/internos/${interno.foto}` es la ruta a la imagen
        if(interno.foto_frente !== null){            
                fs.unlink(path.resolve(`pictures/internos/${interno.foto_frente}`)).then().catch(error=>{
                
                    console.log(error);
                });            
        }

        //reemplaza la foto actual por la subida
        let data: EditInternoDto = {
            "foto_frente": foto_url
        };
        
        const resultado = await this.internoRepository.update(id, data);
        if(resultado.affected == 0) throw new NotFoundException('No se ha actualizado el campo de imagen');
        return resultado;
    }
    //FIN GUARDAR FOTO EN BASE DE DATOS
    //----------------------------------

    //METODO PARA RETORNAR ARCHIVO IMAGEN DEL USUARIO POR NOMBRE DE LA FOTO
    getFoto(nombre_foto: string){
        try {
            const ruta = path.resolve(__dirname,`../../pictures/internos/${nombre_foto}`);
            return ruta;            
            
        } catch (error) {
            throw new BadRequestException(error.message);
        }   
    
    }
    //FIN METODO PARA RETORNAR ARCHIVO IMAGEN POR NOMBRE
    //----------------------------------


    private _getLleva(cumple: Date, anioPena: number, mesesPena: number, diasPena: number): string{
        try {
            
        } catch (error) {
            
        }        
        /**
                 * 
                 * calculos
                 */
                return "";
    }

    private _getCalculosPenado(interno: Interno): object{
        try {
            //calculo tiempo que lleva
            let fecha_cumple = moment(interno.fecha_cumple);
            
            let fecha_detencion = moment(interno.fecha_detencion);
            //let fecha_actual = moment('2021-10-28');
            let fecha_actual = moment('2021-10-28');


            let dias_aux = fecha_actual.diff(fecha_detencion, 'days');
        
            let anios = fecha_actual.diff(fecha_detencion, 'year');
            fecha_detencion.add(anios,'years');
            let meses= fecha_actual.diff(fecha_detencion, 'months');
            fecha_detencion.add(meses,'month');
            let dias =fecha_actual.diff(fecha_detencion, 'days');
            
            
            let meses2 = Math.trunc(dias_aux / 30);
            let dias2 = dias_aux % 30;
            let anios2 = Math.trunc(meses2 / 12);
            meses2 = meses2 % 12;
            

            //fin calculo tiempo que lleva
            return {
                status: "OK",
                //cumple: interno.fecha_cumple.toString(),
                cumnple_1: interno.fecha_cumple,
                cummple: interno.fecha_cumple,
                fecha_detencion: interno.fecha_detencion,
                anios: anios,
                meses: meses,
                dias: dias,
                fecha_hoy: fecha_actual,
                dias_total: dias_aux,
                lleva_dias: dias2,
                lleva_meses: meses2,
                lleva_anios: anios2,
                ingreso: interno.fecha_ingreso,
                ingreso_2: new Date(interno.fecha_ingreso).toLocaleDateString()

                //falta,
                //lleva
            };
        } catch (error) {
            throw new Error(error.message);
        }        
        /**
                 * 
                 * calculos
                 */
                //return "";
    }





}
