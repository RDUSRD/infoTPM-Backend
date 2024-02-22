import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class createCommentDto {
  @ApiProperty({
    description: 'Comentario de la linea',
    type: String,
    default: 'Comentario de la linea',
  })
  @IsString()
  @IsNotEmpty()
  readonly com_comment: string;

  @ApiProperty({
    description: 'Id del usuario',
    type: Number,
    default: 1,
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  com_idUser: number;

  @ApiProperty({
    description: 'Id de la linea',
    type: Number,
    default: 1,
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  com_idLine: number;
}

export class updateCommentDto extends PartialType(createCommentDto) {}
