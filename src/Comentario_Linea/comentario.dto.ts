import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class createCommentDto {
  @IsString()
  @IsNotEmpty()
  readonly com_comment: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  com_idUser: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  com_idLine: number;
}

export class updateCommentDto extends PartialType(createCommentDto) {}
