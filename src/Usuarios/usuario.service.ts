import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './usuario.entities';
import { createUserDto, updateUserDto } from './usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.userRepository.find({
      relations: ['userLines', 'comment'],
    });
    return users;
  }

  async findByid(usu_id: number) {
    return await this.userRepository.findOne({
      where: { usu_id },
      relations: ['userLines', 'comment'],
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
    this.userRepository.save(newUser);
    return newUser;
  }

  async update(usu_id: number, payload: updateUserDto) {
    const entity = await this.userRepository.findOne({
      where: { usu_id },
    });
    if (!entity) {
      throw new NotFoundException(`Usuario #${usu_id} not found`);
    }
    this.userRepository.update(usu_id, payload);
  }

  async delete(usu_id: number): Promise<DeleteResult> {
    try {
      const entity = await this.userRepository.findOne({
        where: { usu_id },
      });
      if (!entity) {
        throw new NotFoundException(`User #${usu_id} not found`);
      }
      return await this.userRepository.delete({ usu_id });
    } catch (error) {
      if (error.message.includes('a foreign key constraint fails')) {
        throw new NotFoundException(
          `Cannot delete User #${usu_id} because it is associated with other entities`,
        );
      }
      throw error;
    }
  }
}
