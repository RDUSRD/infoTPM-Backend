import { Lineas } from 'src/Lineas/lineas.entities';
import { Usuario } from 'src/Usuarios/usuario.entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'comentario_linea' })
export class Comentario {
  @PrimaryGeneratedColumn()
  com_id: number;

  @Column()
  com_comentario: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'com_idUsuario' })
  usuario: Usuario;

  @ManyToOne(() => Lineas)
  @JoinColumn({ name: 'com_idLinea' })
  linea: Lineas;
}
