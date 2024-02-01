import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  usu_password: string;
}

export class updateUserDto extends PartialType(createUserDto) {}
