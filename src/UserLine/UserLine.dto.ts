import { IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateUserLineDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  lineId: number;
}

export class UpdateUserLineDto extends PartialType(CreateUserLineDto) {}
