import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class createAdminDto {
  @ApiProperty({
    description: 'The username of the admin',
    type: String,
    example: 'admin',
  })
  @IsNotEmpty()
  @IsString()
  readonly adm_username: string;

  @ApiProperty({
    description: 'The email of the admin',
    type: String,
    example: 'admin@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly adm_email: string;

  @IsNotEmpty()
  @IsString()
  adm_password: string;
}

export class updateAdminDto extends PartialType(createAdminDto) {}
