import { Line } from 'src/Lineas/lineas.entities';
import { User } from 'src/Usuarios/usuario.entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'comment_line' })
class Comment {
  @PrimaryGeneratedColumn()
  com_id: number;

  @Column()
  com_comment: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'com_idUser' })
  User: User;

  @ManyToOne(() => Line)
  @JoinColumn({ name: 'com_idLine' })
  line: Line;
}

export { Comment };
