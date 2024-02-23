import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userController } from './usuario.controller';
import { User } from './usuario.entity';
import { UserService } from './usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [userController],
  providers: [UserService],
  exports: [UserService],
})
export class userModule {}
