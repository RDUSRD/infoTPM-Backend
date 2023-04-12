import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { adminModule } from './Administrador_S/admin.module';
import { commentModule } from './Comentario_Linea/comentario.module';
import { lineModule } from './Lineas/lineas.module';
import { stopsModule } from './Paradas/paradas.module';
import { userModule } from './Usuarios/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB_HOST,
      port: parseInt(DB_PORT),
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [__dirname + 'src/**/*.entities.ts'],
      synchronize: true,
      autoLoadEntities: true,
      // dropSchema: true, //No usar en produccion.
    }),
    userModule,
    lineModule,
    commentModule,
    adminModule,
    stopsModule,
  ],
})
export class AppModule {}
