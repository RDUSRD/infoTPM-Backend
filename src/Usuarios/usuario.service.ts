import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Usuario } from './usuario.entities';
import { createUserDto, updateUserDto } from './usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuario) private userRepository: Repository<Usuario>,
  ) {}

  findAll() {
    return this.userRepository.find;
  }

  async findOne(usu_id: number) {
    return await this.userRepository.findOne({
      where: { usu_id },
    });
  }

  async create(payload: createUserDto) {
    const entidad = await this.userRepository.findOne({
      where: { usu_email: payload.usu_email },
    });
    if (entidad) {
      throw new HttpException('Usuario ya existente', HttpStatus.CONFLICT);
    }
    const newUser = this.userRepository.create(payload);
    this.userRepository.save(newUser);
  }

  async update(usu_id: number, payload: updateUserDto) {
    const entidad = await this.userRepository.findOne({
      where: { usu_id },
    });
    if (!entidad) {
      throw new NotFoundException(`Product #${usu_id} not found`);
    }
    this.userRepository.update(usu_id, payload);
  }

  async delete(usu_id: number) {
    const entidad = await this.userRepository.findOne({
      where: { usu_id },
    });
    if (!entidad) {
      throw new NotFoundException(`Product #${usu_id} not found`);
    }
    return this.userRepository.delete({ usu_id });
  }
}
