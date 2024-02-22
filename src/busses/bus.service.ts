import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Bus } from './bus.entities';
import { createBusDto, updateBusDto } from './bus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LineService } from 'src/Lineas/lineas.service';
import { UserService } from 'src/Usuarios/usuario.service';

@Injectable()
export class BusService {
  constructor(
    @InjectRepository(Bus) private busRepository: Repository<Bus>,
    // Inyectamos el servicio de lineas
    private lineService: LineService,

    // Inyectamos el servicio de usuarios
    private userService: UserService,
  ) {}

  async findAll() {
    return this.busRepository.find({ relations: ['Line', 'user'] });
  }

  async findById(bus_id: number) {
    return await this.busRepository.findOne({
      where: { bus_id },
      relations: ['Line', 'user'],
    });
  }

  async findByPlate(bus_plate: string) {
    return await this.busRepository.findOne({
      where: { bus_plate },
      relations: ['Line', 'user'],
    });
  }

  async create(payload: createBusDto) {
    const entity = await this.busRepository.findOne({
      where: { bus_plate: payload.bus_plate },
    });
    if (entity) {
      throw new HttpException('Bus ya existente', HttpStatus.CONFLICT);
    }

    const user = await this.userService.findByid(payload.bus_usuId);

    if (!user) {
      throw new NotFoundException(`User #${payload.bus_usuId} not found`);
    }

    const line = await this.lineService.findByid(payload.bus_linId);

    if (!line) {
      throw new NotFoundException(`Line #${payload.bus_linId} not found`);
    }

    const newbus = this.busRepository.create(payload);
    newbus.Line = line;
    newbus.user = user;

    this.busRepository.save(newbus);
    return newbus;
  }

  async update(bus_id: number, payload: updateBusDto) {
    const entity = await this.busRepository.findOne({
      where: { bus_id },
    });
    if (!entity) {
      throw new NotFoundException(`Bus #${bus_id} not found`);
    }

    if (payload.bus_usuId) {
      const user = await this.userService.findByid(payload.bus_usuId);
      if (!user) {
        throw new NotFoundException(`User #${payload.bus_usuId} not found`);
      }
      entity.user = user;
    }

    if (payload.bus_linId) {
      const line = await this.lineService.findByid(payload.bus_linId);
      if (!line) {
        throw new NotFoundException(`Line #${payload.bus_linId} not found`);
      }
      entity.Line = line;
    }

    entity.bus_plate = payload.bus_plate;
    entity.bus_lat = payload.bus_lat;
    entity.bus_lon = payload.bus_lon;
    entity.bus_status = payload.bus_status;

    this.busRepository.update(bus_id, entity);
  }

  async delete(bus_id: number) {
    const entity = await this.busRepository.findOne({
      where: { bus_id },
    });
    if (!entity) {
      throw new NotFoundException(`Bus #${bus_id} not found`);
    }
    return this.busRepository.delete({ bus_id });
  }
}
