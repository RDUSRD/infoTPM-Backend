import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { commentController } from './comentario.controller';
import { Comment } from './comentario.entities';
import { CommentService } from './comentario.service';
import { userModule } from 'src/Usuarios/usuario.module';
import { lineModule } from 'src/Lineas/lineas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), userModule, lineModule],
  controllers: [commentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class commentModule {}
