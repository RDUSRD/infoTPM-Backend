import { SystemAdmin } from 'src/Administrador_S/admin.entities';
import { Comment } from 'src/Comentario_Linea/comentario.entities';
import { Exclude } from 'class-transformer';
import { Stops } from 'src/Paradas/paradas.entities';
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
class User {
  @PrimaryGeneratedColumn()
  usu_id: number;

  @Column()
  usu_name: string;

  @Column()
  usu_lastName: string;

  @Column()
  usu_email: string;

  @Column()
  usu_birthday: string;

  @Exclude()
  @Column()
  usu_password: string;

  @Column()
  usu_rol: string;

  @OneToOne(() => SystemAdmin, (SystemAdmin) => SystemAdmin.adminUser)
  systemAdmin: SystemAdmin;

  @OneToMany(() => Comment, (comment) => comment.User)
  comment: Comment[];

  @ManyToMany(() => Stops, (Stops) => Stops.User)
  @JoinTable({
    name: 'stops_fav',
    joinColumn: { name: 'par_id' },
    inverseJoinColumn: { name: 'usu_id' },
  })
  Stops: Stops[];
}

export { User };
