import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserLineDto {
  @ApiProperty({
    description: 'The id of the user',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    description: 'The id of the line',
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  lineId: number;
}

export class UpdateUserLineDto extends PartialType(CreateUserLineDto) {}
