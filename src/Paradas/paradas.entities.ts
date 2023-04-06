import { Lineas } from 'src/Lineas/lineas.entities';
import { Usuario } from 'src/Usuarios/usuario.entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'Parada' })
class Parada {
  @PrimaryGeneratedColumn()
  par_id: number;

  @Column({ unique: true })
  par_nombre: string;

  @Column()
  par_latitud: string;

  @Column()
  par_longitud: string;

  @Column({ nullable: true })
  par_descripcion: string;

  @ManyToOne(() => Lineas, (linea) => linea.paradas)
  @JoinColumn({ name: 'par_linId' })
  linea: Lineas;

  @ManyToMany(() => Usuario, (usuario) => usuario.paradas)
  usuarios: Usuario[];
}

export { Parada };
