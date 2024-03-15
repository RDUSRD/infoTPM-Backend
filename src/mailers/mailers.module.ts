import { Module } from '@nestjs/common';
import { userModule } from 'src/Usuarios/usuario.module';
import { mailerController } from './mailers.controller';
import { MailerService } from './mailers.service';

@Module({
  imports: [userModule],
  controllers: [mailerController],
  providers: [MailerService],
  exports: [],
})
export class mailerModule {}
