import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from './../../Usuarios/usuario.dto';
import { UserService } from './../../Usuarios/usuario.service';
import * as bcrypt from 'bcrypt';
import { loginUserDto, loginAdminDto } from './../auth.dto';
import { Roles } from '../auth.enum';
import { createAdminDto } from './../../Admin/admin.dto';
import { AdminService } from './../../Admin/admin.service';
import { User } from '../../Usuarios/usuario.entity';
import { Admin } from '../../Admin/admin.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private adminService: AdminService,
    private jwtTokenService: JwtService,
  ) {}

  // AuthUser

  async validateUserCredentials(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user && bcrypt.compareSync(password, user.usu_password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { usu_password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginUserWithCredentials(user: any) {
    const payload = {
      email: user.usu_email,
      sub: user.usu_id,
      role: Roles.USER,
    };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }

  async loginUser(payload: loginUserDto) {
    const userValidated = await this.validateUserCredentials(
      payload.email,
      payload.password,
    );

    if (userValidated) {
      return this.loginUserWithCredentials(userValidated);
    }
    return null;
  }

  async registerUser(user: createUserDto) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(user.usu_password, salt);
      user.usu_password = hashedPassword;
      const userCreated = await this.userService.create(user);
      if (userCreated === undefined) {
        throw new Error('User not created');
      }
      return userCreated;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  //AuthAdmin

  async validateAdminCredentials(
    email: string,
    password: string,
  ): Promise<any> {
    const admin = await this.adminService.findByEmail(email);

    if (admin && bcrypt.compareSync(password, admin.adm_password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { adm_password, ...result } = admin;
      return result;
    }
    return null;
  }

  async loginAdminWithCredentials(admin: any) {
    const payload = {
      email: admin.adm_email,
      sub: admin.adm_id,
      role: Roles.ADMIN,
    };
    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }

  async loginAdmin(payload: loginAdminDto) {
    const adminValidated = await this.validateAdminCredentials(
      payload.email,
      payload.password,
    );

    if (adminValidated) {
      return this.loginAdminWithCredentials(adminValidated);
    }
    return null;
  }

  async registerAdmin(admin: createAdminDto) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(admin.adm_password, salt);
      admin.adm_password = hashedPassword;
      const adminCreated = await this.adminService.create(admin);
      if (!adminCreated) {
        throw new Error('Amdmin not created');
      }
      return adminCreated;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  //JwtManagement

  async findByJWT(token: string): Promise<User> {
    if (!token) {
      throw new HttpException('Token no proporcionado', HttpStatus.BAD_REQUEST);
    }

    let decodedToken;
    try {
      decodedToken = await this.jwtTokenService.verify(token);
    } catch (e) {
      throw new HttpException('Token inválido', HttpStatus.UNAUTHORIZED);
    }

    const user = await this.userService.findByid(decodedToken.sub);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async findByJWTAdmin(token: string): Promise<Admin> {
    if (!token) {
      throw new HttpException('Token no proporcionado', HttpStatus.BAD_REQUEST);
    }

    let decodedToken;
    try {
      decodedToken = await this.jwtTokenService.verify(token);
    } catch (e) {
      throw new HttpException('Token inválido', HttpStatus.UNAUTHORIZED);
    }

    const admin = await this.adminService.findByid(decodedToken.sub);
    if (!admin) {
      throw new HttpException('Admin not found', HttpStatus.UNAUTHORIZED);
    }
    return admin;
  }
}
