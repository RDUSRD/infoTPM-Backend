import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Lineas } from './lineas.entities';
import { createLineasDto, updatelineasDto } from './lineas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LineaService {
  constructor(
    @InjectRepository(Lineas) private lineaRepository: Repository<Lineas>,
  ) {}

  findAll() {
    return this.lineaRepository.find;
  }

  async findOne(lin_id: number) {
    return await this.lineaRepository.findOne({
      where: { lin_id },
    });
  }

  async create(payload: createLineasDto) {
    const entidad = await this.lineaRepository.findOne({
      where: { lin_nombre: payload.lin_nombre },
    });
    if (entidad) {
      throw new HttpException('Usuario ya existente', HttpStatus.CONFLICT);
    }
    const newUser = this.lineaRepository.create(payload);
    this.lineaRepository.save(newUser);
  }

  async update(lin_id: number, payload: updatelineasDto) {
    const entidad = await this.lineaRepository.findOne({
      where: { lin_id },
    });
    if (!entidad) {
      throw new NotFoundException(`Product #${lin_id} not found`);
    }
    this.lineaRepository.update(lin_id, payload);
  }

  async delete(lin_id: number) {
    const entidad = await this.lineaRepository.findOne({
      where: { lin_id },
    });
    if (!entidad) {
      throw new NotFoundException(`Product #${lin_id} not found`);
    }
    return this.lineaRepository.delete({ lin_id });
  }
}
