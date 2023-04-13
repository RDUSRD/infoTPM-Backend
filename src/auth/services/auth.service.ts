import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './../../Usuarios/usuario.service';
import { User } from './../../Usuarios/usuario.entities';
import { PayloadToken } from '../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      if (user.usu_password === password) {
        return user;
      }
    }
    return null;
  }

  generateJWT(user: User): { access_token: string; user: User } {
    const payload: PayloadToken = { role: user.usu_rol, sub: user.usu_id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
