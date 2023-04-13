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
import { StopService } from 'src/Paradas/paradas.service';
import * as nodemailer from 'nodemailer';

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

  async sendEmail(
    to: string,
    subject: string,
    body: string,
    variable: any,
  ): Promise<void> {
    // Crea un objeto de transporte de correo
    const transporter = nodemailer.createTransport({
      // Configura los detalles del servidor de correo
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Usar SSL
      auth: {
        user: 'infotpm3@gmail.com', // Tu dirección de correo electrónico
        pass: 'ozslbtiyvqqvtpif', // Tu contraseña de correo electrónico
      },
    });

    // Configura los detalles del correo electrónico
    const mailOptions = {
      from: 'infotpm3@gmail.com', // Tu dirección de correo electrónico
      to, // Dirección de correo electrónico del destinatario
      subject, // Asunto del correo electrónico
      html: `Hola, <br><br> Aquí está la variable: <b>${variable}</b><br><br> Saludos, <br> Tu aplicación`, // Cuerpo del correo electrónico (puedes usar HTML)
    };

    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);
  }
}
