import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { AdminService } from './admin.service';
import { ApiTags } from '@nestjs/swagger';
import { createAdminDto, updateAdminDto } from './admin.dto';

@ApiTags('Admin')
@Controller('admin')
export class adminController {
  constructor(private adminService: AdminService) {}

  @Get()
  home() {
    return this.adminService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.findByid(id);
  }

  @Post('create')
  create(@Body() payload: createAdminDto) {
    return this.adminService.create(payload);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateAdminDto,
  ) {
    return this.adminService.update(id, payload);
  }

  @Delete('delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.delete(id);
  }
}
