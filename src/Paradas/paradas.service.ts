import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Stops } from './paradas.entities';
import { createStopsDto, updateStopsDto } from './paradas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StopService {
  constructor(
    @InjectRepository(Stops) private stopRepository: Repository<Stops>,
  ) {}

  findAll() {
    return this.stopRepository.find();
  }

  async findOne(par_id: number) {
    return await this.stopRepository.findOne({
      where: { par_id },
    });
  }

  async create(payload: createStopsDto) {
    const entity = await this.stopRepository.findOne({
      where: { par_name: payload.par_name },
    });
    if (entity) {
      throw new HttpException('Usuario ya existente', HttpStatus.CONFLICT);
    }
    const newstop = this.stopRepository.create(payload);
    this.stopRepository.save(newstop);
  }

  async update(par_id: number, payload: updateStopsDto) {
    const entity = await this.stopRepository.findOne({
      where: { par_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${par_id} not found`);
    }
    this.stopRepository.update(par_id, payload);
  }

  async delete(par_id: number) {
    const entity = await this.stopRepository.findOne({
      where: { par_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${par_id} not found`);
    }
    return this.stopRepository.delete({ par_id });
  }
}
