import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserLineService } from './UserLine.service';
import { CreateUserLineDto } from './UserLine.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('UserLine')
@Controller('userline')
export class UserLineController {
  constructor(private readonly userLineService: UserLineService) {}

  @Get()
  getAllUserLines() {
    return this.userLineService.findAll();
  }

  @Get(':userid/:lineid')
  getUserLineById(
    @Param('userid') userid: number,
    @Param('lineid') lineid: number,
  ) {
    return this.userLineService.findById(userid, lineid);
  }

  @Post('/create')
  createUserLine(@Body() payload: CreateUserLineDto) {
    return this.userLineService.create(payload);
  }

  @Delete('/delete/:userid/:lineid')
  deleteUserLine(
    @Param('userid') userid: number,
    @Param('lineid') lineid: number,
  ) {
    return this.userLineService.delete(userid, lineid);
  }
}
