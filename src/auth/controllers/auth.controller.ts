import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './../services/auth.service';
import { createUserDto } from 'src/Usuarios/usuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { loginUserDto, loginAdminDto, loginBusDto } from './../auth.dto';
import { createAdminDto } from 'src/Admin/admin.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/Usuarios/usuario.service';
import { AdminService } from 'src/Admin/admin.service';
import { BusService } from 'src/busses/bus.service';
import { createBusDto } from 'src/busses/bus.dto';

@ApiTags('Auth')
@Controller('Auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtTokenService: JwtService,
    private userService: UserService,
    private adminService: AdminService,
    private busService: BusService,
  ) {}

  // JwtManagement

  @Get('findByToken/:Jwttoken')
  async getOneByToken(@Param('Jwttoken') Jwttoken: string) {
    const user = await this.authService.findByJWT(Jwttoken);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  @Get('findByTokenAdmin/:Jwttoken')
  async getOneByTokenAdmin(@Param('Jwttoken') Jwttoken: string) {
    const admin = await this.authService.findByJWTAdmin(Jwttoken);
    if (!admin) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }
    return admin;
  }

  // AuthUser

  @Get('login/:email/:password')
  async login(@Param('email') par1: string, @Param('password') par2: string) {
    const payload = new loginUserDto();
    payload.email = par1;
    payload.password = par2;
    const result = await this.authService.loginUser(payload);
    if (result) {
      return { success: true, data: result };
    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  }

  @Post('register')
  async register(@Body() user: createUserDto) {
    const result = await this.authService.registerUser(user);
    if (result !== undefined) {
      return { success: true, data: result };
    } else {
      return { success: false, message: 'Failed to register user' };
    }
  }

  // AuthAdmin

  @Get('loginAdmin/:email/:password')
  async loginAdmin(
    @Param('email') par1: string,
    @Param('password') par2: string,
  ) {
    const payload = new loginAdminDto();
    payload.email = par1;
    payload.password = par2;
    const result = await this.authService.loginAdmin(payload);
    if (result) {
      return {
        success: true,
        data: result,
      };
    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  }

  @Post('registerAdmin')
  async registerAdmin(@Body() admin: createAdminDto) {
    const result = await this.authService.registerAdmin(admin);
    if (result) {
      return { success: true, data: result };
    } else {
      return { success: false, message: 'Failed to register admin' };
    }
  }

  // AuthBus

  @Get('loginBus/:plate/:password')
  async loginBus(
    @Param('plate') par1: string,
    @Param('password') par2: string,
  ) {
    const payload = new loginBusDto();
    payload.plate = par1;
    payload.password = par2;
    const result = await this.authService.loginBus(payload);
    if (result) {
      return {
        success: true,
        data: result,
      };
    } else {
      return { success: false, message: 'Invalid plate or password' };
    }
  }

  @Post('registerBus')
  async registerBus(@Body() bus: createBusDto) {
    const result = await this.authService.registerBus(bus);
    if (result) {
      return { success: true, data: result };
    } else {
      return { success: false, message: 'Failed to register bus' };
    }
  }
}
