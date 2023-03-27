import { Injectable, NotFoundException } from '@nestjs/common';
import { AdminSistema } from './admin.entities';
import { createAdminDto, updateAdminDto } from './admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminSistema)
    private adminRepository: Repository<AdminSistema>,
  ) {}

  findAll() {
    return this.adminRepository.find;
  }

  async findOne(admin_id: number) {
    return await this.adminRepository.findOne({
      where: { admin_id },
    });
  }

  async create(payload: createAdminDto) {
    const newUser = this.adminRepository.create(payload);
    this.adminRepository.save(newUser);
  }

  async update(admin_id: number, payload: updateAdminDto) {
    const entidad = await this.adminRepository.findOne({
      where: { admin_id },
    });
    if (!entidad) {
      throw new NotFoundException(`Product #${admin_id} not found`);
    }
    this.adminRepository.update(admin_id, payload);
  }

  async delete(admin_id: number) {
    const entidad = await this.adminRepository.findOne({
      where: { admin_id },
    });
    if (!entidad) {
      throw new NotFoundException(`Product #${admin_id} not found`);
    }
    return this.adminRepository.delete({ admin_id });
  }
}
