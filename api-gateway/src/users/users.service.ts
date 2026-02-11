import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums/transport.enum';

@Injectable()
export class UsersService {
    private client:ClientProxy;
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: 'localhost',
                port: 3001,
            },
        });
    }
    getUsers() {
        return this.client.send({ cmd: 'get_users' }, {});
    }
    getUserById(id: number) {
        return this.client.send({ cmd: 'get_user_by_id' }, id);
    }
}