import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { UserService } from './usuario.service';
import { createUserDto, updateUserDto } from './usuario.dto';

@ApiTags('Users')
@Controller('Users')
export class userController {
  constructor(private userService: UserService) {}

  @Get()
  home() {
    return this.userService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findByid(id);
  }

  @Get('email/:email')
  getByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Put('PasswordRecovery/:id')
  async updatePasswordRecovery(
    @Param('id') id: number,
    @Body() payload: updateUserDto,
  ) {
    const user = await this.userService.findByid(id);
    if (!user) {
      throw new NotFoundException(`User #${payload.usu_email} not found`);
    }
    return this.userService.updatePassword(user.usu_id, payload.usu_password);
  }

  @Post('create')
  create(@Body() payload: createUserDto) {
    return this.userService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateUserDto,
  ) {
    return this.userService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
