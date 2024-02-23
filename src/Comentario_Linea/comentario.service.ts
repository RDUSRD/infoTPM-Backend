import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from './comentario.entity';
import { createCommentDto, updateCommentDto } from './comentario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/Usuarios/usuario.service';
import { LineService } from 'src/Lineas/lineas.service';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    private userService: UserService,
    private lineService: LineService,
  ) {}

  findAll() {
    return this.commentRepository.find({
      relations: ['User', 'line'],
    });
  }

  async findByid(com_id: number) {
    return await this.commentRepository.findOne({
      where: { com_id },
    });
  }

  async create(payload: createCommentDto) {
    const user = await this.userService.findByid(payload.com_idUser);
    const line = await this.lineService.findByid(payload.com_idLine);

    if (!user) {
      throw new NotFoundException(
        `User with id ${payload.com_idUser} not found`,
      );
    }

    if (!line) {
      throw new NotFoundException(
        `Line with id ${payload.com_idLine} not found`,
      );
    }

    const newComment = this.commentRepository.create(payload);

    newComment.User = user;
    newComment.line = line;

    await this.commentRepository.save(newComment);
  }

  async update(com_id: number, payload: updateCommentDto) {
    const comment = await this.commentRepository.findOne({
      where: { com_id },
    });

    if (!comment) {
      throw new NotFoundException(`Comment #${com_id} not found`);
    }

    const user = await this.userService.findByid(payload.com_idUser);
    const line = await this.lineService.findByid(payload.com_idLine);

    if (!user) {
      throw new NotFoundException(
        `User with id ${payload.com_idUser} not found`,
      );
    }

    if (!line) {
      throw new NotFoundException(
        `Line with id ${payload.com_idLine} not found`,
      );
    }

    this.commentRepository.update(com_id, payload);
  }

  async delete(com_id: number) {
    const entity = await this.commentRepository.findOne({
      where: { com_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${com_id} not found`);
    }
    return this.commentRepository.delete({ com_id });
  }
}
