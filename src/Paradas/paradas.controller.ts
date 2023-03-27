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

import { ParadaService } from './paradas.service';
import { createParadaDto, updateParadaDto } from './paradas.dto';

@Controller('paradas')
export class paradaController {
  constructor(private paradaService: ParadaService) {}

  @Get()
  home() {
    return this.paradaService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.paradaService.findOne(id);
  }

  @Post('create')
  create(@Body() payload: createParadaDto) {
    return this.paradaService.create(payload);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateParadaDto,
  ) {
    return this.paradaService.update(id, payload);
  }

  @Delete('delete:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.paradaService.delete(id);
  }
}
