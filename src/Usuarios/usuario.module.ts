import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userController } from './usuario.controller';
import { User } from './usuario.entities';
import { UserService } from './usuario.service';
import { stopsModule } from 'src/Paradas/paradas.module';
import { EmailController } from './email.controller';
import { commentModule } from 'src/Comentario_Linea/comentario.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), stopsModule, commentModule],
  controllers: [userController, EmailController],
  providers: [UserService],
  exports: [UserService],
})
export class userModule {}
