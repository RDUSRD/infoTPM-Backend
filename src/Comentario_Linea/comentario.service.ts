import { Injectable, NotFoundException } from '@nestjs/common';
import { Comentario } from './comentario.entities';
import { createComentDto, updateComentDto } from './comentario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ComentarioService {
  constructor(
    @InjectRepository(Comentario)
    private comentarioRepository: Repository<Comentario>,
  ) {}

  findAll() {
    return this.comentarioRepository.find;
  }

  async findOne(com_id: number) {
    return await this.comentarioRepository.findOne({
      where: { com_id },
    });
  }

  async create(payload: createComentDto) {
    const newUser = this.comentarioRepository.create(payload);
    this.comentarioRepository.save(newUser);
  }

  async update(com_id: number, payload: updateComentDto) {
    const entidad = await this.comentarioRepository.findOne({
      where: { com_id },
    });
    if (!entidad) {
      throw new NotFoundException(`Product #${com_id} not found`);
    }
    this.comentarioRepository.update(com_id, payload);
  }

  async delete(com_id: number) {
    const entidad = await this.comentarioRepository.findOne({
      where: { com_id },
    });
    if (!entidad) {
      throw new NotFoundException(`Product #${com_id} not found`);
    }
    return this.comentarioRepository.delete({ com_id });
  }
}
