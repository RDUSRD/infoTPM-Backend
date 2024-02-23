import { Line } from 'src/Lineas/lineas.entity';
import { User } from 'src/Usuarios/usuario.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'UserLine' })
class UserLine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (User) => User.userLines, { nullable: false })
  user: User;

  @ManyToOne(() => Line, (Line) => Line.userLine, { nullable: false })
  line: Line;
}

export { UserLine };
