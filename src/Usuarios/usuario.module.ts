import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userController } from './usuario.controller';
import { User } from './usuario.entity';
import { UserService } from './usuario.service';
import { UserLine } from 'src/UserLine/UserLine.entity';
import { Comment } from 'src/Comentario_Linea/comentario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserLine, Comment])],
  controllers: [userController],
  providers: [UserService],
  exports: [UserService],
})
export class userModule {}
