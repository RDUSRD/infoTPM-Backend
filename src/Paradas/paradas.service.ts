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
import { LineService } from 'src/Lineas/lineas.service';
import { access, unlink } from 'fs/promises';

@Injectable()
export class StopService {
  constructor(
    @InjectRepository(Stops) private stopRepository: Repository<Stops>,
    // Inyectamos el servicio de lineas
    private lineService: LineService,
  ) {}

  async findAll() {
    return this.stopRepository.find({ relations: ['Line'] });
  }

  async findById(par_id: number) {
    return await this.stopRepository.findOne({
      where: { par_id },
      relations: ['Line'],
    });
  }

  async deleteImage(path: string): Promise<void> {
    try {
      await access(path);
      await unlink(path);
    } catch (error) {
      // If the file doesn't exist, do nothing
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
  }

  async create(payload: createStopsDto) {
    const entity = await this.stopRepository.findOne({
      where: { par_name: payload.par_name },
    });
    if (entity) {
      throw new HttpException('Parada ya existente', HttpStatus.CONFLICT);
    }

    const line = await this.lineService.findByid(payload.par_linId);

    if (!line) {
      throw new NotFoundException(`Line #${payload.par_linId} not found`);
    }

    const newstop = this.stopRepository.create(payload);
    newstop.Line = line;

    this.stopRepository.save(newstop);
  }

  async update(par_id: number, payload: updateStopsDto) {
    const entity = await this.stopRepository.findOne({
      where: { par_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${par_id} not found`);
    }

    if (payload.par_linId) {
      const line = await this.lineService.findByid(payload.par_linId);
      if (!line) {
        throw new NotFoundException(`Line #${payload.par_linId} not found`);
      }
      entity.Line = line;
    }

    this.stopRepository.update(par_id, entity);
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
