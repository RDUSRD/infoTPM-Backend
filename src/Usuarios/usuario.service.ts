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
import { CommentService } from './../Comentario_Linea/comentario.service';
import * as nodemailer from 'nodemailer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private stopsRepository: StopService,
    private commentRepository: CommentService,
  ) {}

  async findAll() {
    const users = await this.userRepository.find({
      relations: ['Stops'], // Corregir el nombre de la relación a 'comments'
    });
    // for (const user of users) {
    //   user.comment = await this.commentRepository.getCommentsByUserId(
    //     user.usu_id,
    //   ); // Llamar al método getCommentsByUserId con el userId del usuario
    // }
    return users;
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

  async addStopToFavorites(userId: number, stopId: number): Promise<void> {
    // Busca el usuario en la base de datos
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.Stops', 'Stops')
      .where('user.usu_id = :userId', { userId })
      .getOne();

    // Verifica que el usuario exista
    if (!user) {
      throw new NotFoundException(`Usuario #${userId} no encontrado`);
    }

    // Busca la parada en la base de datos
    const stop = await this.stopsRepository.findOne(stopId);

    // Verifica que la parada exista
    if (!stop) {
      throw new NotFoundException(`Parada #${stopId} no encontrada`);
    }

    // Agrega la parada a las paradas favoritas del usuario
    user.Stops.push(stop);

    // Guarda los cambios en la base de datos
    await this.userRepository.save(user);
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
      html: `<h1 style="text-align:center">Bienvenido</h1>
      <p style="text-align:center">Se ha ingresado la siguiente contraseña:</p>
      <input value="${variable}" style="display:block; margin:0 auto; padding:10px; font-size:16px; text-align:center" disabled>`, // Cuerpo del correo electrónico (puedes usar HTML)
    };
    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);
  }
}
