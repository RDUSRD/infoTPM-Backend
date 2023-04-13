import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userController } from './usuario.controller';
import { User } from './usuario.entities';
import { UserService } from './usuario.service';
import { stopsModule } from 'src/Paradas/paradas.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), stopsModule],
  controllers: [userController],
  providers: [UserService],
  exports: [UserService],
})
export class userModule {}
