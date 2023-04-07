import { User } from 'src/Usuarios/usuario.entities';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'System_Admin' })
class SystemAdmin {
  @PrimaryGeneratedColumn()
  admin_id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'admin_idUser' })
  adminUser: User;
}

export { SystemAdmin };
