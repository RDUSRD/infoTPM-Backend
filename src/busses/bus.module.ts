import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusController } from './bus.controller';
import { Bus } from './bus.entities';
import { BusService } from './bus.service';
import { lineModule } from 'src/Lineas/lineas.module';
import { userModule } from 'src/Usuarios/usuario.module';

@Module({
  imports: [TypeOrmModule.forFeature([Bus]), lineModule, userModule],
  controllers: [BusController],
  providers: [BusService],
  exports: [BusService],
})
export class busModule {}
