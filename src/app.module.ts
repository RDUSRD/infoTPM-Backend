import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { adminModule } from './Administrador_S/admin.module';
import { comentarioModule } from './Comentario_Linea/comentario.module';
import { lineaModule } from './Lineas/lineas.module';
import { paradaModule } from './Paradas/paradas.module';
import { usuarioModule } from './Usuarios/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(),
    usuarioModule,
    lineaModule,
    comentarioModule,
    adminModule,
    paradaModule,
  ],
})
export class AppModule {}
