import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class createUserDto {
  @ApiProperty({
    description: 'The name of the user',
    type: String,
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  readonly usu_name: string;

  @ApiProperty({
    description: 'The last name of the user',
    type: String,
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty()
  readonly usu_lastName: string;

  @ApiProperty({
    description: 'The email of the user',
    type: String,
    example: 'email@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly usu_email: string;

  @ApiProperty({
    description: 'The role of the user',
    type: String,
    example: 'admin',
  })
  @IsString()
  @IsNotEmpty()
  readonly usu_role: string;

  @ApiProperty({
    description: 'The password of the user',
    type: String,
    example: '1234',
  })
  @IsString()
  @IsNotEmpty()
  usu_password: string;
}

export class updateUserDto extends PartialType(createUserDto) {}
