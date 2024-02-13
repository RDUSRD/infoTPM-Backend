import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class loginUserDto {
  @ApiProperty({ example: 'correo@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class loginAdminDto {
  @ApiProperty({ example: 'correoAdmin@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456admin' })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class loginBusDto {
  @ApiProperty({ example: '123-ABC' })
  @IsNotEmpty()
  @IsString()
  plate: string;

  @ApiProperty({ example: '1234' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
