import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppClient } from '../models/app.client.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RegistrationService {

    constructor(
        @InjectRepository(AppClient)
        private appClientRepository: Repository<AppClient>,
    ) {}


    findOne(id: string): Promise<AppClient> {
        return this.appClientRepository.findOne(id);
    }

    createApp(id: string): Promise<AppClient> {
        let appClient = new AppClient();
        appClient.key = uuidv4();
        appClient.secret = uuidv4();
        appClient.name = id;

        return this.appClientRepository.save(appClient);
    }
}
