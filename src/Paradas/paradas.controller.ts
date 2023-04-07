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

import { StopService } from './paradas.service';
import { createStopsDto, updateStopsDto } from './paradas.dto';

@ApiTags('Stops')
@Controller('stops')
export class StopsController {
  constructor(private stopsService: StopService) {}

  @Get()
  home() {
    return this.stopsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.stopsService.findOne(id);
  }

  @Post('create')
  create(@Body() payload: createStopsDto) {
    return this.stopsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateStopsDto,
  ) {
    return this.stopsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.stopsService.delete(id);
  }
}
