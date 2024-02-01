import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Admin' })
class Admin {
  @PrimaryGeneratedColumn()
  adm_id: number;

  @Column()
  adm_username: string;

  @Column()
  adm_email: string;

  @Column()
  adm_password: string;
}

export { Admin };
