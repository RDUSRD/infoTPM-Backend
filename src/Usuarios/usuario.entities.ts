import { Comment } from 'src/Comentario_Linea/comentario.entities';
import { UserLine } from 'src/UserLine/UserLine.entities';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

  @OneToMany(() => Comment, (comment) => comment.User)
  comment: Comment[];

  @OneToMany(() => UserLine, (userLine) => userLine.user)
  userLines: UserLine[];
}

export { User };
