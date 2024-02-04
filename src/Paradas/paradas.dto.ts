import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class createStopsDto {
  @IsNotEmpty()
  @IsString()
  readonly par_name: string;

  @IsNotEmpty()
  @IsString()
  readonly par_lat: string;

  @IsNotEmpty()
  @IsString()
  readonly par_long: string;

  @IsString()
  readonly par_description: string;

  @IsNumber()
  readonly Line: number;
}

export class updateStopsDto extends PartialType(createStopsDto) {}
