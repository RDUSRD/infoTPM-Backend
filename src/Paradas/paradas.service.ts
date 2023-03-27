import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Parada } from './paradas.entities';
import { createParadaDto, updateParadaDto } from './paradas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ParadaService {
  constructor(
    @InjectRepository(Parada) private paradaRepository: Repository<Parada>,
  ) {}

  findAll() {
    return this.paradaRepository.find;
  }

  async findOne(par_id: number) {
    return await this.paradaRepository.findOne({
      where: { par_id },
    });
  }

  async create(payload: createParadaDto) {
    const entidad = await this.paradaRepository.findOne({
      where: { par_nombre: payload.par_nombre },
    });
    if (entidad) {
      throw new HttpException('Usuario ya existente', HttpStatus.CONFLICT);
    }
    const newParada = this.paradaRepository.create(payload);
    this.paradaRepository.save(newParada);
  }

  async update(par_id: number, payload: updateParadaDto) {
    const entidad = await this.paradaRepository.findOne({
      where: { par_id },
    });
    if (!entidad) {
      throw new NotFoundException(`Product #${par_id} not found`);
    }
    this.paradaRepository.update(par_id, payload);
  }

  async delete(par_id: number) {
    const entidad = await this.paradaRepository.findOne({
      where: { par_id },
    });
    if (!entidad) {
      throw new NotFoundException(`Product #${par_id} not found`);
    }
    return this.paradaRepository.delete({ par_id });
  }
}
