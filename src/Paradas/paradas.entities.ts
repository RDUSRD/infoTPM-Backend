import { Line } from 'src/Lineas/lineas.entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
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

  @Column({ nullable: true })
  par_img: string;

  @ManyToOne(() => Line, (line) => line.stops, { nullable: false })
  @JoinColumn({ name: 'par_linId' })
  Line: Line;
}

export { Stops };
