import { Line } from 'src/Lineas/lineas.entity';
import { User } from 'src/Usuarios/usuario.entity';
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

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'com_idUser' })
  User: User;

  @ManyToOne(() => Line, { nullable: false })
  @JoinColumn({ name: 'com_idLine' })
  line: Line;
}

export { Comment };
