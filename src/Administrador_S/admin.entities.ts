import { Usuario } from 'src/Usuarios/usuario.entities';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'Administrador_sistema' })
class AdminSistema {
  @PrimaryGeneratedColumn()
  admin_id: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'admin_idUsuario' })
  adminUsuario: Usuario;
}

export { AdminSistema };
