import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    
    @Get('profile')
    profile(){
         return {
            message: "Estos son sus datos"
         }
    }
        
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req){
        
        return req.user;
    }

    

}
