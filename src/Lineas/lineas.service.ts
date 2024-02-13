import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Line } from './lineas.entities';
import { createLineDto, updatelineDto } from './lineas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class LineService {
  constructor(
    @InjectRepository(Line) private lineRepository: Repository<Line>,
  ) {}

  findAll() {
    return this.lineRepository.find();
  }

  async findByid(lin_id: number) {
    return await this.lineRepository.findOne({
      where: { lin_id },
    });
  }

  async create(payload: createLineDto) {
    const entity = await this.lineRepository.findOne({
      where: { lin_name: payload.lin_name },
    });
    if (entity) {
      throw new HttpException('Linea ya existente', HttpStatus.CONFLICT);
    }
    const newUser = this.lineRepository.create(payload);
    this.lineRepository.save(newUser);
  }

  async update(lin_id: number, payload: updatelineDto) {
    const entity = await this.lineRepository.findOne({
      where: { lin_id },
    });
    if (!entity) {
      throw new NotFoundException(`Linea #${lin_id} not found`);
    }
    this.lineRepository.update(lin_id, payload);
  }

  async delete(lin_id: number): Promise<DeleteResult> {
    try {
      const entity = await this.lineRepository.findOne({
        where: { lin_id },
      });
      if (!entity) {
        throw new NotFoundException(`Line #${lin_id} not found`);
      }
      return await this.lineRepository.delete({ lin_id });
    } catch (error) {
      if (error.message.includes('a foreign key constraint fails')) {
        throw new NotFoundException(
          `Cannot delete Line #${lin_id} because it is associated with other entities`,
        );
      }
      throw error;
    }
  }
}
