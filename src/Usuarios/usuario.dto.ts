import { IsString, IsNotEmpty, IsDate, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  readonly usu_name: string;

  @IsString()
  @IsNotEmpty()
  readonly usu_lastName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly usu_email: string;

  @IsDate()
  @IsNotEmpty()
  readonly usu_birthday: string;

  @IsString()
  @IsNotEmpty()
  readonly usu_password: string;

  @IsString()
  @IsNotEmpty()
  readonly usu_rol: string;
}

export class updateUserDto extends PartialType(createUserDto) {}
