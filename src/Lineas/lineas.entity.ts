import { Comment } from 'src/Comentario_Linea/comentario.entity';
import { Stops } from 'src/Paradas/paradas.entity';
import { UserLine } from 'src/UserLine/UserLine.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Line' })
class Line {
  @PrimaryGeneratedColumn()
  lin_id: number;

  @Column()
  lin_name: string;

  @Column()
  lin_start: string;

  @Column()
  lin_close: string;

  @Column()
  lin_exit_point: string;

  @Column()
  lin_arrival_point: string;

  @Column()
  lin_price: number;

  @Column()
  lin_scheduleStart: string;

  @Column()
  lin_scheduleEnd: string;

  @OneToMany(() => Comment, (Comment) => Comment.line)
  comment: Comment[];

  @OneToMany(() => Stops, (Stops) => Stops.Line)
  stops: Stops[];

  @OneToMany(() => UserLine, (userLine) => userLine.line)
  userLine: UserLine[];
}

export { Line };
