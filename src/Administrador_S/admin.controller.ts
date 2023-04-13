import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';

import { AdminService } from './admin.service';
// import { createAdminDto, updateAdminDto } from './admin.dto';
import { ApiTags } from '@nestjs/swagger';

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
    return this.adminService.findOne(id);
  }

  // @Post('create')
  // create(@Body() payload: createAdminDto) {
  //   return this.adminService.create(payload);
  // }

  // @Put('update/:id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() payload: updateAdminDto,
  // ) {
  //   return this.adminService.update(id, payload);
  // }

  @Delete('delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.delete(id);
  }
}
