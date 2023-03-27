import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';

import { UserService } from './usuario.service';
import { createUserDto, updateUserDto } from './usuario.dto';

@Controller('usuario')
export class usuarioController {
  constructor(private userService: UserService) {}

  @Get()
  home() {
    return this.userService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post('create')
  create(@Body() payload: createUserDto) {
    return this.userService.create(payload);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateUserDto,
  ) {
    return this.userService.update(id, payload);
  }

  @Delete('delete:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
