import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { userModule } from './../Usuarios/usuario.module';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    userModule,
    PassportModule,
    JwtModule.register({
      secret: 'hola',
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
