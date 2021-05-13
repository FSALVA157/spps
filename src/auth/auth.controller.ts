import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    
    @Get('profile')
    profile(){
         return {
            message: "Estos son sus datos"
         }
    }
    

    @Post('login')
    login(){
       return {
           message: "Se encuentra logueado"
       }
    }

}
