import { AdminSistema } from 'src/Administrador_S/admin.entities';
import { Comentario } from 'src/Comentario_Linea/comentario.entities';
import { Parada } from 'src/Paradas/paradas.entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'Usuario' })
class Usuario {
  @PrimaryGeneratedColumn()
  usu_id: number;

  @Column()
  usu_nombre: string;

  @Column()
  usu_apellido: string;

  @Column()
  usu_email: string;

  @Column()
  usu_fecha_nacimiento: string;

  @Column()
  usu_password: string;

  @OneToOne(() => AdminSistema, (adminUsuario) => adminUsuario.adminUsuario)
  adminUsuario: AdminSistema;

  @OneToMany(() => Comentario, (usuario) => usuario.usuario)
  comentarios: Comentario[];

  @ManyToMany(() => Parada, (Parada) => Parada.usuarios)
  @JoinTable({
    name: 'parada_fav',
    joinColumn: { name: 'par_id' },
    inverseJoinColumn: { name: 'usu_id' },
  })
  paradas: Parada[];
}

export { Usuario };
