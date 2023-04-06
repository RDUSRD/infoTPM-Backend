import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { adminModule } from './Administrador_S/admin.module';
import { comentarioModule } from './Comentario_Linea/comentario.module';
import { lineaModule } from './Lineas/lineas.module';
import { paradaModule } from './Paradas/paradas.module';
import { usuarioModule } from './Usuarios/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'infotpm',
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
