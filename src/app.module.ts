import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { adminModule } from './Administrador_S/admin.module';
import { comentarioModule } from './Comentario_Linea/comentario.module';
import { lineaModule } from './Lineas/lineas.module';
import { paradaModule } from './Paradas/paradas.module';
import { usuarioModule } from './Usuarios/usuario.module';
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
      entities: ['./**/*.entities{.ts,.js}'],
      synchronize: true,
      // autoLoadEntities: true,
    }),
    usuarioModule,
    lineaModule,
    comentarioModule,
    adminModule,
    paradaModule,
  ],
})
export class AppModule {}
