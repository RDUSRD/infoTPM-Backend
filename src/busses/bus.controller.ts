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
import { BusService } from './bus.service';
import { createBusDto, updateBusDto } from './bus.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bus')
@Controller('Bus')
export class BusController {
  constructor(private busService: BusService) {}

  @Get()
  home() {
    return this.busService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.busService.findById(id);
  }

  @Post('create')
  async create(@Body() payload: createBusDto) {
    return this.busService.create(payload);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateBusDto,
  ) {
    return this.busService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.busService.delete(id);
  }
}
