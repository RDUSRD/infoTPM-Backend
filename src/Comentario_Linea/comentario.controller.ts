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

import { CommentService } from './comentario.service';
import { createCommentDto, updateCommentDto } from './comentario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Comments')
@Controller('comment')
export class commentController {
  constructor(private commentService: CommentService) {}

  @Get()
  home() {
    return this.commentService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.findByid(id);
  }

  @Post('create')
  create(@Body() payload: createCommentDto) {
    return this.commentService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: updateCommentDto,
  ) {
    return this.commentService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.delete(id);
  }
}
