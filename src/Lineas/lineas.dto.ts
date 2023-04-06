import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class createLineasDto {
  @IsString()
  @IsNotEmpty()
  readonly lin_nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly lin_hora_inicio: string;

  @IsString()
  @IsNotEmpty()
  readonly lin_hora_salida: string;

  @IsString()
  @IsNotEmpty()
  readonly lin_punto_salida: string;

  @IsString()
  @IsNotEmpty()
  readonly lin_punto_llegada: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly lin_precio: number;
}

export class updatelineasDto extends PartialType(createLineasDto) {}
