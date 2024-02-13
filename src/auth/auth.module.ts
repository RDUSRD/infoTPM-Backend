import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { userModule } from 'src/Usuarios/usuario.module';
import { AuthService } from './services/auth.service';
import { JWT_SECRET } from '../config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './controllers/auth.controller';
import { adminModule } from 'src/Admin/admin.module';
import { JwtMiddleware } from './auth.middleware';
import { busModule } from 'src/busses/bus.module';

@Module({
  imports: [
    userModule,
    PassportModule,
    adminModule,
    busModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*');
  }
}
