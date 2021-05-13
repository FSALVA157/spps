import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usuarioService: UsuarioService
    ){ }


    async validateUser(email: string, clave: string){
        const usuario = await this.usuarioService.getUserByEmail(email);
        (usuario && usuario.clave === clave)? usuario: null;
        
    }
}
