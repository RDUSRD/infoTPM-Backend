import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { adminModule } from './Admin/admin.module';
import { commentModule } from './Comentario_Linea/comentario.module';
import { lineModule } from './Lineas/lineas.module';
import { stopsModule } from './Paradas/paradas.module';
import { userModule } from './Usuarios/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config';
import { AuthModule } from './auth/auth.module';
import { UserLineModule } from './UserLine/UserLine.module';
import { busModule } from './busses/bus.module';
import { mailerModule } from './mailers/mailers.module';

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
      // synchronize: true, //No usar en produccion.
      autoLoadEntities: true,
      // dropSchema: true, //No usar en produccion.
    }),
    userModule,
    lineModule,
    commentModule,
    adminModule,
    stopsModule,
    busModule,
    AuthModule,
    UserLineModule,
    mailerModule,
  ],
})
export class AppModule {}
