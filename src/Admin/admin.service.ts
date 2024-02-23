import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Admin } from './admin.entity';
import { createAdminDto, updateAdminDto } from './admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  findAll() {
    return this.adminRepository.find();
  }

  async findByid(adm_id: number) {
    const admin = await this.adminRepository.findOne({ where: { adm_id } });
    if (!admin) {
      throw new NotFoundException(`Admin #${adm_id} not found`);
    }
    return admin;
  }

  async findByEmail(adm_email: string) {
    const admin = await this.adminRepository.findOne({ where: { adm_email } });
    if (!admin) {
      throw new NotFoundException(`Admin with email ${adm_email} not found`);
    }
    return admin;
  }

  async create(payload: createAdminDto) {
    const existingAdmin = await this.adminRepository.findOne({
      where: { adm_username: payload.adm_username },
    });

    if (existingAdmin) {
      throw new ConflictException(
        `Admin with name ${payload.adm_username} already exists`,
      );
    }

    const existingEmail = await this.adminRepository.findOne({
      where: { adm_email: payload.adm_email },
    });

    if (existingEmail) {
      throw new ConflictException(
        `Admin with email ${payload.adm_email} already exists`,
      );
    }

    const newAdmin = this.adminRepository.create(payload);
    await this.adminRepository.save(newAdmin);
    return newAdmin;
  }

  async update(admin_id: number, payload: updateAdminDto) {
    if (!payload || Object.keys(payload).length === 0) {
      throw new BadRequestException('No data provided for update');
    }

    const admin = await this.findByid(admin_id);
    const updatedAdmin = this.adminRepository.merge(admin, payload);
    await this.adminRepository.save(updatedAdmin);
    return updatedAdmin;
  }

  async delete(admin_id: number) {
    const admin = await this.findByid(admin_id);
    if (!admin) {
      throw new NotFoundException(`Admin #${admin_id} not found`);
    }
    await this.adminRepository.delete(admin_id);
    return admin;
  }
}
