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

  @Get('/find/:userid/:lineid')
  getUserLineById(
    @Param('userid') userid: number,
    @Param('lineid') lineid: number,
  ) {
    return this.userLineService.findById(userid, lineid);
  }

  @Get('/findbyid/:id')
  getUserLineByid(@Param('id') id: number) {
    return this.userLineService.findUserLineId(id);
  }

  @Post('/create')
  createUserLine(@Body() payload: CreateUserLineDto) {
    return this.userLineService.create(payload);
  }

  @Delete('/delete/:id')
  deleteUserLineById(@Param('id') id: number) {
    return this.userLineService.delete(id);
  }

  @Delete('/deletebyids/:userid/:lineid')
  deleteUserLine(
    @Param('userid') userid: number,
    @Param('lineid') lineid: number,
  ) {
    return this.userLineService.deleteByIds(userid, lineid);
  }
}
