import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class createBusDto {
  @ApiProperty({
    description: 'The plate of the bus',
    type: String,
    example: '123-ABC',
  })
  @IsNotEmpty()
  @IsString()
  readonly bus_plate: string;

  @ApiProperty({
    description: 'The latitude of the bus',
    type: String,
    example: '123.0000',
  })
  @IsString()
  readonly bus_lat: string;

  @ApiProperty({
    description: 'The longitude of the bus',
    type: String,
    example: '123.0000',
  })
  @IsString()
  readonly bus_lon: string;

  @ApiProperty({
    description: 'The status of the bus',
    type: String,
    example: 'active',
  })
  @IsNotEmpty()
  @IsString()
  readonly bus_status: string;

  @ApiProperty({
    description: 'The user of the bus',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly bus_usuId: number;

  @ApiProperty({
    description: 'The line of the bus',
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly bus_linId: number;
}

export class updateBusDto extends PartialType(createBusDto) {}
