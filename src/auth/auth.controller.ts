import { Controller, HttpCode, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponse } from './auth.response';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/generate')
    @HttpCode(200)
    async getToken(
        @Body('key') key: string,
        @Body('secret') secret: string): Promise<AuthResponse> {
        let token: string = await this.authService.generateToken(key, secret);
        let resp: AuthResponse = new AuthResponse();
        resp.token = token;
        return resp;
    }

    @Post()
    @HttpCode(200)
    async validate(@Body('token') token: string, @Body('key') key: string) {
        let json = await this.authService.validateToken(token, key);
        return json;
    }
}