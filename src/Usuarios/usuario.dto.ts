import { IsString, IsNotEmpty, IsDate, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  readonly usu_nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly usu_apellido: string;

  @IsEmail()
  @IsNotEmpty()
  readonly usu_email: string;

  @IsDate()
  @IsNotEmpty()
  readonly usu_fecha_nacimiento: string;

  @IsString()
  @IsNotEmpty()
  readonly usu_password: string;
}

export class updateUserDto extends PartialType(createUserDto) {}
