import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { commentController } from './comentario.controller';
import { Comment } from './comentario.entities';
import { CommentService } from './comentario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  controllers: [commentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class commentModule {}
