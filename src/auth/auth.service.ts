import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { compare } from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private readonly usuarioService: UsuarioService
    ){ }

    //metodo para validar el usario
    //uso de compare desde libreria bcrypt
    async validateUser(email: string, clave: string){
        const usuario = await this.usuarioService.getUserByEmail(email);
        if(usuario && await compare(clave, usuario.clave)){
            
            delete usuario.clave; // quita el campo clave para no retornarlo en la respuesta
            return usuario;
        }
        else{
            return null;
        }
    }
}
