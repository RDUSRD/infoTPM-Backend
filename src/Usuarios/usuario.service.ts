import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './usuario.entities';
import { createUserDto, updateUserDto } from './usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { StopService } from 'src/Paradas/paradas.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private stopsRepository: StopService,
  ) {}

  findAll() {
    return this.userRepository.find({
      relations: ['Stops'],
    });
  }

  async findByid(usu_id: number) {
    return await this.userRepository.findOne({
      where: { usu_id },
      relations: ['Stops'],
    });
  }

  async findByEmail(usu_email: string) {
    return await this.userRepository.findOne({
      where: { usu_email },
    });
  }

  async create(payload: createUserDto) {
    const entity = await this.userRepository.findOne({
      where: { usu_email: payload.usu_email },
    });
    if (entity) {
      throw new HttpException('Usuario ya existente', HttpStatus.CONFLICT);
    }
    const newUser = this.userRepository.create(payload);
    const hashPassword = await bcrypt.hash(newUser.usu_password, 10);
    newUser.usu_password = hashPassword;
    this.userRepository.save(newUser);
  }

  async update(usu_id: number, payload: updateUserDto) {
    const entity = await this.userRepository.findOne({
      where: { usu_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${usu_id} not found`);
    }
    this.userRepository.update(usu_id, payload);
  }

  async delete(usu_id: number) {
    const entity = await this.userRepository.findOne({
      where: { usu_id },
    });
    if (!entity) {
      throw new NotFoundException(`Product #${usu_id} not found`);
    }
    return this.userRepository.delete({ usu_id });
  }

  async addStopsToFavorites(userId: number, stopId: number): Promise<User> {
    // Busca el usuario y la parada en la base de datos
    const user = await this.userRepository.findOne({
      where: { usu_id: userId },
    });
    const stop = await this.stopsRepository.findOne(stopId);

    // Verifica que el usuario y la parada existan
    if (!user || !stop) {
      throw new NotFoundException('Usuario o Parada no encontrada');
    }

    // Agrega la parada a las paradas favoritas del usuario
    user.Stops.push(stop);

    // Guarda los cambios en la base de datos
    return this.userRepository.save(user);
  }
}
