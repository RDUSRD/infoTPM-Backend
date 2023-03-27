import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { lineaController } from './lineas.controller';
import { Lineas } from './lineas.entities';
import { LineaService } from './lineas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lineas])],
  controllers: [lineaController],
  providers: [LineaService],
})
export class lineaModule {}
