import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class createParadaDto {
  @IsNotEmpty()
  @IsString()
  readonly par_nombre: string;

  @IsNotEmpty()
  @IsString()
  readonly par_latitud: string;

  @IsNotEmpty()
  @IsString()
  readonly par_longitud: string;

  @IsString()
  readonly par_descripcion: string;
}

export class updateParadaDto extends PartialType(createParadaDto) {}
