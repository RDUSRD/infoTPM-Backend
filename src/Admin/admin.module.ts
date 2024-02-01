import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { adminController } from './admin.controller';
import { Admin } from './admin.entities';
import { AdminService } from './admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [adminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class adminModule {}
