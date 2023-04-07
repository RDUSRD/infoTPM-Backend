import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StopsController } from './paradas.controller';
import { Stops } from './paradas.entities';
import { StopService } from './paradas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Stops])],
  controllers: [StopsController],
  providers: [StopService],
})
export class stopsModule {}
