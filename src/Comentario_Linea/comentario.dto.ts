import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class createComentDto {
  @IsString()
  @IsNotEmpty()
  readonly com_comentario: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly com_idUsuario: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly com_idLinea: number;
}

export class updateComentDto extends PartialType(createComentDto) {}
