import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { UserService } from './usuario.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Password Request')
@Controller('email')
export class EmailController {
  constructor(private emailService: UserService) {}

  @Post()
  async sendEmail(@Body() body: { to: string }): Promise<void> {
    const { to } = body;
    const user = await this.emailService.findByEmail(to);
    if (user) {
      const pass = user.usu_password;
      const subject = 'Sistema de recuperación';
      await this.emailService.sendEmail(to, subject, '', pass);
    } else {
      // Manejar el caso en que no se encontró un usuario con el correo electrónico proporcionado
      // Puedes lanzar un error, enviar una respuesta específica, o realizar otra acción según tus necesidades
      throw new NotFoundException('Usuario no encontrado');
    }
  }
}
