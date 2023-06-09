import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class createAdminDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly admin_idUser: number;
}

export class updateAdminDto extends PartialType(createAdminDto) {}
