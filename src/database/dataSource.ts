import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../config';
import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: ['./src/**/*.entity{.ts,.js}'],
  migrations: ['./src/database/migrations/*.ts'],
  migrationsRun: true,
  synchronize: true,
});
