import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppClient } from 'src/models/app.client.entity';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(AppClient)
        private appClientRepository: Repository<AppClient>,
    ) { }

    async generateToken(key: string, secret: string) {
        const payload = { key };

        const exists = await this.appClientRepository.findOne({
            key,
            secret
        });

        if (exists) {
            const accessToken = jwt.sign(payload, secret, { expiresIn: 10 });
            return accessToken;
        } else {
            throw new UnauthorizedException();
        }
    }

    async validateToken(token: string, key: string) {

        const exists = await this.appClientRepository.findOne({
            key
        }).catch(e => {
            console.log('here');
        });

        if (exists) {
            try {
                const json = await jwt.verify(token, exists.secret);
                console.log(json);
                return json;
            } catch (e) {
                throw new UnauthorizedException("Token is expired");
            }
        } else {
            throw new UnauthorizedException();
        }
    }
}
