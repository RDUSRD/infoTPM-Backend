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

import { LineaService } from './lineas.service';
import { createLineasDto, updatelineasDto } from './lineas.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Lineas')
@Controller('lineas')
export class lineaController {
  constructor(private lineaService: LineaService) {}

  @Get()
  home() {
    return this.lineaService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.lineaService.findOne(id);
  }

  @Post('create')
  create(@Body() payload: createLineasDto) {
    return this.lineaService.create(payload);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updatelineasDto,
  ) {
    return this.lineaService.update(id, payload);
  }

  @Delete('delete:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.lineaService.delete(id);
  }
}
