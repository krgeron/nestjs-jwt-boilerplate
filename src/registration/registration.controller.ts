import { Controller, Post, Body } from '@nestjs/common';
import { RegistrationService } from './registration.service';

@Controller('register')
export class RegistrationController {

    constructor(private registrationService : RegistrationService) {}

    @Post()
    registerApp(@Body('name') name: string) {
        if(name !== '') {
            this.registrationService.createApp(name);
        }
    }
}
