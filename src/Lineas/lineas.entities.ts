import { Comentario } from 'src/Comentario_Linea/comentario.entities';
import { Parada } from 'src/Paradas/paradas.entities';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Lineas' })
export class Lineas {
  @PrimaryGeneratedColumn()
  lin_id: number;

  @Column()
  lin_nombre: string;

  @Column()
  lin_hora_inicio: string;

  @Column()
  lin_hora_cierre: string;

  @Column()
  lin_punto_salida: string;

  @Column()
  lin_punto_llegada: string;

  @Column()
  lin_precio: number;

  @OneToMany(() => Comentario, (linea) => linea.linea)
  comentarios: Comentario[];

  @OneToMany(() => Parada, (linea) => linea.linea)
  paradas: Parada[];
}
