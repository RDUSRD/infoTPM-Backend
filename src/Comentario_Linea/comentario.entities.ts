import { Line } from 'src/Lineas/lineas.entities';
import { User } from 'src/Usuarios/usuario.entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'coment_line' })
class Coment {
  @PrimaryGeneratedColumn()
  com_id: number;

  @Column()
  com_coment: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'com_idUser' })
  User: User;

  @ManyToOne(() => Line)
  @JoinColumn({ name: 'com_idLine' })
  line: Line;
}

export { Coment };
