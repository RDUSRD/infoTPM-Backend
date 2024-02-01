import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLineController } from './Userline.controller';
import { UserLine } from './UserLine.entities';
import { UserLineService } from './UserLine.service';
import { userModule } from 'src/Usuarios/usuario.module';
import { lineModule } from 'src/Lineas/lineas.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserLine]), userModule, lineModule],
  controllers: [UserLineController],
  providers: [UserLineService],
})
export class UserLineModule {}