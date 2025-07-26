import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccessTokenJwtStrategy } from './strategies/access_jwt-strategy';
import { RefreshTokenJwtStrategy } from './strategies/refresh_jwt-strategy';
import { GoogleController } from './google.controller';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    // dynamic initialize of jwt module by passing config
    JwtModule.register({}),
    forwardRef(() => UserModule),
  ],
  controllers: [AuthController, GoogleController],
  providers: [AuthService, RefreshTokenJwtStrategy, AccessTokenJwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
