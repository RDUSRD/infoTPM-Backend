import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Line } from './lineas.entities';
import { createLineDto, updatelineDto } from './lineas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LineService {
  constructor(
    @InjectRepository(Line) private lineRepository: Repository<Line>,
  ) {}

  findAll() {
    return this.lineRepository.find();
  }

  async findOne(lin_id: number) {
    return await this.lineRepository.findOne({
      where: { lin_id },
    });
  }

  async create(payload: createLineDto) {
    const entity = await this.lineRepository.findOne({
      where: { lin_name: payload.lin_name },
    });
    if (entity) {
      throw new HttpException('Usuario ya existente', HttpStatus.CONFLICT);
    }
    const newUser = this.lineRepository.create(payload);
    this.lineRepository.save(newUser);
  }

  async update(lin_id: number, payload: updatelineDto) {
    const entity = await this.lineRepository.findOne({
      where: { lin_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${lin_id} not found`);
    }
    this.lineRepository.update(lin_id, payload);
  }

  async delete(lin_id: number) {
    const entity = await this.lineRepository.findOne({
      where: { lin_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${lin_id} not found`);
    }
    return this.lineRepository.delete({ lin_id });
  }
}
