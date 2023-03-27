import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { comentarioController } from './comentario.controller';
import { Comentario } from './comentario.entities';
import { ComentarioService } from './comentario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario])],
  controllers: [comentarioController],
  providers: [ComentarioService],
})
export class comentarioModule {}
