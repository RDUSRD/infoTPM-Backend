import { Controller, Post, Param, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdminService } from 'src/admin/admin.service';
import { MailerService } from '../mailers/mailers.service';
import { UserService } from 'src/Usuarios/usuario.service';

@ApiTags('Mailer')
@Controller('Mailer')
export class mailerController {
  constructor(
    private userService: UserService,
    private adminService: AdminService,
    private mailerService: MailerService,
  ) {}

  @Post('emailRecovery/:to')
  async sendEmail(@Param('to') to: string): Promise<void> {
    const email = to;
    const user = await this.userService.findByEmail(email);
    if (user) {
      const id = user.usu_id;
      const email = user.usu_email;
      const subject = 'Sistema de recuperación para INFOTPM';
      await this.mailerService.sendEmailRecovery(to, subject, '', id, email);
    } else {
      // Manejar el caso en que no se encontró un usuario con el correo electrónico proporcionado
      // Puedes lanzar un error, enviar una respuesta específica, o realizar otra acción según tus necesidades
      throw new NotFoundException('Usuario no encontrado');
    }
  }

  @Post('EmailWelcome/:to')
  async sendEmailWelcome(@Param('to') to: string): Promise<void> {
    const email = to;
    const user = await this.userService.findByEmail(email);
    if (user) {
      const subject = 'Bienvenido a la app INFOTPM';
      await this.mailerService.sendEmailWelcome(to, subject);
    } else {
      // Manejar el caso en que no se encontró un usuario con el correo electrónico proporcionado
      // Puedes lanzar un error, enviar una respuesta específica, o realizar otra acción según tus necesidades
      throw new NotFoundException('Usuario no encontrado');
    }
  }
}
