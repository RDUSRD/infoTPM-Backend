import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

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
}

export class updateStopsDto extends PartialType(createStopsDto) {}
