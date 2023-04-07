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

import { ComentService } from './comentario.service';
import { createComentDto, updateComentDto } from './comentario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Coments')
@Controller('coment')
export class comentController {
  constructor(private comentService: ComentService) {}

  @Get()
  home() {
    return this.comentService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.comentService.findOne(id);
  }

  @Post('create')
  create(@Body() payload: createComentDto) {
    return this.comentService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateComentDto,
  ) {
    return this.comentService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.comentService.delete(id);
  }
}
