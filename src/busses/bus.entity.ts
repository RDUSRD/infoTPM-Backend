import { Line } from 'src/Lineas/lineas.entity';
import { User } from 'src/Usuarios/usuario.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'Bus' })
class Bus {
  @PrimaryGeneratedColumn()
  bus_id: number;

  @Column()
  bus_plate: string;

  @Column({ nullable: true })
  bus_lat: string;

  @Column({ nullable: true })
  bus_lon: string;

  @Column({ default: 'offline' })
  bus_status: string;

  @Column({ nullable: true })
  bus_linId: number;

  @OneToOne(() => User, (User) => User.usu_id, { nullable: true })
  @JoinColumn({ name: 'bus_usuId' })
  user: User;

  @ManyToOne(() => Line, (line) => line.lin_id)
  @JoinColumn({ name: 'bus_linId' })
  Line: Line;
}

export { Bus };
