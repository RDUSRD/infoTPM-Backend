import { Injectable, NotFoundException } from '@nestjs/common';
import { Coment } from './comentario.entities';
import { createComentDto, updateComentDto } from './comentario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ComentService {
  constructor(
    @InjectRepository(Coment)
    private comentRepository: Repository<Coment>,
  ) {}

  findAll() {
    return this.comentRepository.find();
  }

  async findOne(com_id: number) {
    return await this.comentRepository.findOne({
      where: { com_id },
    });
  }

  async create(payload: createComentDto) {
    const newUser = this.comentRepository.create(payload);
    this.comentRepository.save(newUser);
  }

  async update(com_id: number, payload: updateComentDto) {
    const entity = await this.comentRepository.findOne({
      where: { com_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${com_id} not found`);
    }
    this.comentRepository.update(com_id, payload);
  }

  async delete(com_id: number) {
    const entity = await this.comentRepository.findOne({
      where: { com_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${com_id} not found`);
    }
    return this.comentRepository.delete({ com_id });
  }
}
