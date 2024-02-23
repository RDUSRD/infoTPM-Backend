import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserLine } from './UserLine.entities';
import { CreateUserLineDto } from './UserLine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/Usuarios/usuario.service';
import { LineService } from 'src/Lineas/lineas.service';

@Injectable()
export class UserLineService {
  constructor(
    @InjectRepository(UserLine)
    private userLineRepository: Repository<UserLine>,
    private userService: UserService,
    private lineService: LineService,
  ) {}

  findAll() {
    return this.userLineRepository.find({
      relations: ['user', 'line'],
    });
  }

  async findById(userId: number, lineId: number) {
    const user = await this.userService.findByid(userId);
    const line = await this.lineService.findByid(lineId);

    if (!user || !line) {
      throw new NotFoundException('Usuario o línea no encontrados');
    }

    const userLine = await this.userLineRepository.findOne({
      where: { user: user, line: line },
      relations: ['user', 'line'],
    });

    return userLine;
  }

  async findUserLineId(userLineId: number) {
    const userLine = await this.userLineRepository.findOne({
      where: { id: userLineId },
      relations: ['user', 'line'],
    });

    if (!userLine) {
      throw new NotFoundException(
        `No se encontró la línea de usuario con ID #${userLineId}`,
      );
    }

    return userLine;
  }

  async create(payload: CreateUserLineDto) {
    const user = await this.userService.findByid(payload.userId);
    const line = await this.lineService.findByid(payload.lineId);

    if (!user || !line) {
      throw new NotFoundException('Usuario o línea no encontrados');
    }

    const existingUserLine = await this.findById(user.usu_id, line.lin_id);

    if (existingUserLine) {
      throw new HttpException(
        'El usuario ya ha agregado esta línea',
        HttpStatus.CONFLICT,
      );
    }

    const newUserLine = this.userLineRepository.create({ user, line });
    return this.userLineRepository.save(newUserLine);
  }

  async delete(userLineId: number) {
    const userLine = await this.findUserLineId(userLineId);

    if (!userLine) {
      throw new NotFoundException(
        `No se encontró la línea de usuario con ID #${userLineId}`,
      );
    }

    await this.userLineRepository.remove(userLine);
  }

  async deleteByIds(userId: number, lineId: number) {
    const user = await this.userService.findByid(userId);
    const line = await this.lineService.findByid(lineId);

    if (!user || !line) {
      throw new NotFoundException('Usuario o línea no encontrados');
    }

    const userLine = await this.userLineRepository.findOne({
      where: { user: user, line: line },
    });

    if (!userLine) {
      throw new NotFoundException(
        'No se encontró la relación entre el usuario y la línea',
      );
    }

    await this.userLineRepository.remove(userLine);
  }
}
