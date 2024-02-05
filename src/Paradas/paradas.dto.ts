import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class createStopsDto {
  @ApiProperty({
    example: 'Parada 1',
    description: 'Nombre de la parada',
  })
  @IsNotEmpty()
  @IsString()
  readonly par_name: string;

  @ApiProperty({
    example: '19.4326',
    description: 'Latitud de la parada',
  })
  @IsNotEmpty()
  @IsString()
  readonly par_lat: string;

  @ApiProperty({
    example: '-99.1332',
    description: 'Longitud de la parada',
  })
  @IsNotEmpty()
  @IsString()
  readonly par_long: string;

  @ApiProperty({
    example: 'Parada 1',
    description: 'Descripción de la parada',
  })
  @IsString()
  readonly par_description: string;

  @ApiProperty({
    example: '1',
    description: 'Id de la linea',
  })
  @IsNumber()
  readonly par_linId: number;

  @ApiProperty({
    required: false,
    format: 'binary',
    type: 'string',
    description: 'Imagen de la parada',
  })
  par_img: string;
}

export class updateStopsDto extends PartialType(createStopsDto) {}
