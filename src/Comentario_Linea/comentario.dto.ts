import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class createComentDto {
  @IsString()
  @IsNotEmpty()
  readonly com_coment: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly com_idUser: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly com_idLine: number;
}

export class updateComentDto extends PartialType(createComentDto) {}
