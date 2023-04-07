import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from './comentario.entities';
import { createCommentDto, updateCommentDto } from './comentario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  findAll() {
    return this.commentRepository.find();
  }

  async findOne(com_id: number) {
    return await this.commentRepository.findOne({
      where: { com_id },
    });
  }

  async create(payload: createCommentDto) {
    const newUser = this.commentRepository.create(payload);
    this.commentRepository.save(newUser);
  }

  async update(com_id: number, payload: updateCommentDto) {
    const entity = await this.commentRepository.findOne({
      where: { com_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${com_id} not found`);
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
