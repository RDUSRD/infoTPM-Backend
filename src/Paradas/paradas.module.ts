import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StopsController } from './paradas.controller';
import { Stops } from './paradas.entities';
import { StopService } from './paradas.service';
import { lineModule } from 'src/Lineas/lineas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Stops]), lineModule],
  controllers: [StopsController],
  providers: [StopService],
  exports: [StopService],
})
export class stopsModule {}
