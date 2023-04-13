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

  // Método para obtener comentarios por ID de usuario
  async getCommentsByUserId(userId: number): Promise<Comment[]> {
    return this.commentRepository
      .createQueryBuilder('comment') // Usar createQueryBuilder para crear una consulta
      .leftJoinAndSelect('comment.User', 'User') // Hacer un left join con la relación user en Comment
      .where('User.usu_id = :userId', { userId }) // Filtrar por el campo userId en User
      .getMany(); // Ejecutar la consulta y obtener los resultados
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
