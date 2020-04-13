import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppClient } from 'src/models/app.client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppClient])],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
