import { Comment } from 'src/Comentario_Linea/comentario.entity';
import { UserLine } from 'src/UserLine/UserLine.entity';
import { Bus } from 'src/busses/bus.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
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
  usu_password: string;

  @Column()
  usu_role: string;

  @OneToOne(() => Bus, (Bus) => Bus.bus_id, { nullable: true })
  bus: Bus[];

  @OneToMany(() => Comment, (comment) => comment.User)
  comment: Comment[];

  @OneToMany(() => UserLine, (userLine) => userLine.user, { cascade: true })
  userLines: UserLine[];
}

export { User };
