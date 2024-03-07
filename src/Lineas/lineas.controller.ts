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

import { LineService } from './lineas.service';
import { createLineDto, updatelineDto } from './lineas.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Lines')
// @UseGuards(JwtAuthGuard)
@Controller('line')
export class lineController {
  constructor(private lineService: LineService) {}

  @Get()
  home() {
    return this.lineService.findAll();
  }

  @Get('linesAndStops')
  getLinesAndStops() {
    return this.lineService.getLinesAndStops();
  }

  @Get('linesAndStopsPlane')
  getLinesAndStopsPlane() {
    return this.lineService.getLinesAndStopsPlane();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.lineService.findByid(id);
  }

  @Post('create')
  create(@Body() payload: createLineDto) {
    return this.lineService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updatelineDto,
  ) {
    return this.lineService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.lineService.delete(id);
  }
}
