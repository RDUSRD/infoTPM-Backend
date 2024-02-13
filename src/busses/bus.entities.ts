import { Line } from 'src/Lineas/lineas.entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'Bus' })
class Bus {
  @PrimaryGeneratedColumn()
  bus_id: number;

  @Column()
  bus_plate: string;

  @Column({ nullable: true })
  bus_lat: number;

  @Column({ nullable: true })
  bus_lon: number;

  @Column({ default: 'offline' })
  bus_status: string;

  @Column()
  bus_password: string;

  @ManyToOne(() => Line, (line) => line.lin_id)
  @JoinColumn({ name: 'bus_linId' })
  Line: Line;
}

export { Bus };
