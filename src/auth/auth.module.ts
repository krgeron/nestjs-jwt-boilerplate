import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AppClient } from 'src/models/app.client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([AppClient])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
