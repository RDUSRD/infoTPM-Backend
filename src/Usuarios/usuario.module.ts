import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuarioController } from './usuario.controller';
import { Usuario } from './usuario.entities';
import { UserService } from './usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [usuarioController],
  providers: [UserService],
})
export class usuarioModule {}
