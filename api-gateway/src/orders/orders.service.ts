import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client/client-proxy';
import { ClientProxyFactory } from '@nestjs/microservices/client/client-proxy-factory';
import { Transport } from '@nestjs/microservices/enums/transport.enum';

@Injectable()
export class OrdersService {
    private client: ClientProxy;
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: 'localhost',
                port: 3002,
            },
        });
    }
    getOrders() {
        return this.client.send({ cmd: 'get_orders' }, {});
    }
    findOrdersByUserId(userId: number) {
        return this.client.send({ cmd: 'get_orders_by_user' }, userId);
    }
    findOrderById(id: number) {
        return this.client.send({ cmd: 'get_order_by_id' }, id);
    }
    findOrdersByStatus(status: string) {
        return this.client.send({ cmd: 'get_orders_by_status' }, status);
    }
    findOrdersByItem(item: string) {
        return this.client.send({ cmd: 'get_orders_by_item' }, item);
    }
}
