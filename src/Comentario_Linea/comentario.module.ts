import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { comentController } from './comentario.controller';
import { Coment } from './comentario.entities';
import { ComentService } from './comentario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Coment])],
  controllers: [comentController],
  providers: [ComentService],
})
export class comentModule {}
