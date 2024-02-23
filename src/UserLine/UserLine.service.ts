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
    return this.userLineRepository.find();
  }

  async findById(userId: number, lineId: number) {
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

  async delete(userId: number, lineId: number) {
    const user = await this.userService.findByid(userId);
    const line = await this.lineService.findByid(lineId);

    if (!user || !line) {
      throw new NotFoundException('Usuario o línea no encontrados');
    }

    const existingUserLine = user.userLines.find(
      (userLine) => userLine.line.lin_id === line.lin_id,
    );

    if (!existingUserLine) {
      throw new NotFoundException(
        `No se encontró la línea #${lineId} para el usuario #${userId}`,
      );
    }

    return this.userLineRepository.remove(existingUserLine);
  }
}
