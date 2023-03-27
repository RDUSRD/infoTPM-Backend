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

import { ComentarioService } from './comentario.service';
import { createComentDto, updateComentDto } from './comentario.dto';

@Controller('lineas')
export class comentarioController {
  constructor(private comentarioService: ComentarioService) {}

  @Get()
  home() {
    return this.comentarioService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.comentarioService.findOne(id);
  }

  @Post('create')
  create(@Body() payload: createComentDto) {
    return this.comentarioService.create(payload);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateComentDto,
  ) {
    return this.comentarioService.update(id, payload);
  }

  @Delete('delete:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.comentarioService.delete(id);
  }
}
