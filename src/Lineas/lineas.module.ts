import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { lineController } from './lineas.controller';
import { Line } from './lineas.entity';
import { LineService } from './lineas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Line])],
  controllers: [lineController],
  providers: [LineService],
  exports: [LineService],
})
export class lineModule {}
