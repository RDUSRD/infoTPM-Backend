import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from './../../Usuarios/usuario.dto';
import { UserService } from './../../Usuarios/usuario.service';
import * as bcrypt from 'bcrypt';
import { loginUserDto, loginAdminDto, loginBusDto } from './../auth.dto';
import { Roles } from '../auth.enum';
import { createAdminDto } from './../../Admin/admin.dto';
import { AdminService } from './../../Admin/admin.service';
import { User } from './../../Usuarios/usuario.entities';
import { Admin } from './../../Admin/admin.entities';
import { BusService } from 'src/busses/bus.service';
import { createBusDto } from 'src/busses/bus.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private adminService: AdminService,
    private busService: BusService,
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
      email: user.use_email,
      sub: user.use_id,
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

  // AuthBus

  async validateBusCredentials(plate: string, password: string): Promise<any> {
    const bus = await this.busService.findByPlate(plate);

    if (bus && bcrypt.compareSync(password, bus.bus_password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { bus_password, ...result } = bus;
      return result;
    }
    return null;
  }

  async loginBusWithCredentials(bus: any) {
    const payload = {
      plate: bus.bus_plate,
      sub: bus.bus_id,
      role: Roles.BUS,
    };
    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }

  async loginBus(payload: loginBusDto) {
    const busValidated = await this.validateBusCredentials(
      payload.plate,
      payload.password,
    );

    if (busValidated) {
      return this.loginBusWithCredentials(busValidated);
    }
    return null;
  }

  async registerBus(bus: createBusDto) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(bus.bus_password, salt);
      bus.bus_password = hashedPassword;
      const busCreated = await this.busService.create(bus);
      if (!busCreated) {
        throw new Error('Bus not created');
      }
      return busCreated;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  //JwtManagement

  async findByJWT(token: string): Promise<User> {
    const decodedToken = await this.jwtTokenService.verify(token);
    if (!decodedToken) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    const user = await this.userService.findByid(decodedToken.sub);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async findByJWTAdmin(token: string): Promise<Admin> {
    const decodedToken = await this.jwtTokenService.verify(token);
    if (!decodedToken) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    const admin = await this.adminService.findByid(decodedToken.sub);
    if (!admin) {
      throw new HttpException('Admin not found', HttpStatus.UNAUTHORIZED);
    }
    return admin;
  }
}
