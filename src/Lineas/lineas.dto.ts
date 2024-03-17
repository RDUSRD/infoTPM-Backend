import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class createLineDto {
  @ApiProperty({
    example: 'Linea 1',
    type: String,
    description: 'Nombre de la linea',
  })
  @IsString()
  @IsNotEmpty()
  readonly lin_name: string;

  @ApiProperty({
    example: '06:00',
    type: String,
    description: 'Hora de inicio',
  })
  @IsString()
  @IsNotEmpty()
  readonly lin_start: string;

  @ApiProperty({
    example: '22:00',
    type: String,
    description: 'Hora de cierre',
  })
  @IsString()
  @IsNotEmpty()
  readonly lin_close: string;

  @ApiProperty({
    example: 'Punto de salida',
    type: String,
    description: 'Punto de salida',
  })
  @IsString()
  @IsNotEmpty()
  readonly lin_exit_point: string;

  @ApiProperty({
    example: 'Punto de llegada',
    type: String,
    description: 'Punto de llegada',
  })
  @IsString()
  @IsNotEmpty()
  readonly lin_arrival_point: string;

  @ApiProperty({
    example: 1,
    type: Number,
    description: 'Precio de la linea',
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly lin_price: number;

  @ApiProperty({
    example: '06:00',
    type: String,
    description: 'Hora de inicio de la linea',
  })
  @IsString()
  @IsNotEmpty()
  readonly lin_scheduleStart: string;

  @ApiProperty({
    example: '22:00',
    type: String,
    description: 'Hora de cierre de la linea',
  })
  @IsString()
  @IsNotEmpty()
  readonly lin_scheduleEnd: string;
}

export class updatelineDto extends PartialType(createLineDto) {}
