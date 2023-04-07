import { Coment } from 'src/Comentario_Linea/comentario.entities';
import { Stops } from 'src/Paradas/paradas.entities';
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

  @OneToMany(() => Coment, (Coment) => Coment.line)
  coment: Coment[];

  @OneToMany(() => Stops, (Stops) => Stops.Line)
  stops: Stops[];
}

export { Line };
