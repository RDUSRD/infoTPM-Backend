import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { adminController } from './admin.controller';
import { AdminSistema } from './admin.entities';
import { AdminService } from './admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdminSistema])],
  controllers: [adminController],
  providers: [AdminService],
})
export class adminModule {}
