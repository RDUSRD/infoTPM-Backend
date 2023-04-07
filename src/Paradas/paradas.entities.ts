import { Line } from 'src/Lineas/lineas.entities';
import { User } from 'src/Usuarios/usuario.entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'Stops' })
class Stops {
  @PrimaryGeneratedColumn()
  par_id: number;

  @Column({ unique: true })
  par_name: string;

  @Column()
  par_lat: string;

  @Column()
  par_long: string;

  @Column({ nullable: true })
  par_description: string;

  @ManyToOne(() => Line, (line) => line.stops)
  @JoinColumn({ name: 'par_linId' })
  Line: Line;

  @ManyToMany(() => User, (User) => User.Stops)
  User: User[];
}

export { Stops };
