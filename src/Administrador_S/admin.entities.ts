import { Usuario } from 'src/Usuarios/usuario.entities';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';

@Entity({ name: 'Administrador_sistema' })
export class AdminSistema {
  @PrimaryGeneratedColumn()
  admin_id: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'admin_idUsuario' })
  adminUsuario: Usuario;
}
