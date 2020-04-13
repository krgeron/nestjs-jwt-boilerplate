import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RegistrationModule } from './registration/registration.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppClient } from './models/app.client.entity';

@Module({
  imports: [AuthModule, RegistrationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'xx.x.x.x.com',
      port: 3306,
      username: 'dbadmin',
      password: 'Password2019!',
      database: 'gamificationdb',
      entities: [AppClient],
      synchronize: true,
    })]
})
export class AppModule {}
