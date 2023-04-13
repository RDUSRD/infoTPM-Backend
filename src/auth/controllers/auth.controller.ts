import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './../services/auth.service';
import { User } from './../../Usuarios/usuario.entities';
import { ApiTags } from '@nestjs/swagger';

// Define una interfaz extendiendo la interfaz Request de Express
interface CustomRequest extends Request {
  user: User; // Especifica el tipo correcto de usuario
}
@ApiTags('SignIn')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: CustomRequest) {
    const user = req.user;
    return this.authService.generateJWT(user);
  }
}
