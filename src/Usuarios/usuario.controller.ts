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

import { ApiTags } from '@nestjs/swagger';
import { UserService } from './usuario.service';
import { addFav, createUserDto, updateUserDto } from './usuario.dto';

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

  @Post('create')
  create(@Body() payload: createUserDto) {
    return this.userService.create(payload);
  }

  @Post('AddFav')
  addFav(@Body() payload: addFav) {
    return this.userService.addStopToFavorites(payload.usu_id, payload.par_id);
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
