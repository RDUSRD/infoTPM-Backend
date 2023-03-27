import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { paradaController } from './paradas.controller';
import { Parada } from './paradas.entities';
import { ParadaService } from './paradas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Parada])],
  controllers: [paradaController],
  providers: [ParadaService],
})
export class paradaModule {}
