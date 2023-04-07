import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { adminController } from './admin.controller';
import { SystemAdmin } from './admin.entities';
import { AdminService } from './admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([SystemAdmin])],
  controllers: [adminController],
  providers: [AdminService],
})
export class adminModule {}
