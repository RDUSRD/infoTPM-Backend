import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class createAdminDto {
  @IsNotEmpty()
  @IsString()
  readonly adm_username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly adm_email: string;

  @IsNotEmpty()
  @IsString()
  adm_password: string;
}

export class updateAdminDto extends PartialType(createAdminDto) {}
