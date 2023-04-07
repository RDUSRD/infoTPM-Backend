import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class createLineDto {
  @IsString()
  @IsNotEmpty()
  readonly lin_name: string;

  @IsString()
  @IsNotEmpty()
  readonly lin_start: string;

  @IsString()
  @IsNotEmpty()
  readonly lin_close: string;

  @IsString()
  @IsNotEmpty()
  readonly lin_exit_point: string;

  @IsString()
  @IsNotEmpty()
  readonly lin_arrival_point: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly lin_price: number;
}

export class updatelineDto extends PartialType(createLineDto) {}
