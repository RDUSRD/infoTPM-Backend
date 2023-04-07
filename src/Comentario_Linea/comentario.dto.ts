import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class createCommentDto {
  @IsString()
  @IsNotEmpty()
  readonly com_comment: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly com_idUser: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly com_idLine: number;
}

export class updateCommentDto extends PartialType(createCommentDto) {}
