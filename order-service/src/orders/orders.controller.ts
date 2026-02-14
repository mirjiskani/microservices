import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
    @MessagePattern({cmd: 'get_orders'})
    async getOrders() {
        return this.ordersService.getOrders();
    }
    // request to get orders by user id
 
    @MessagePattern({cmd: 'get_orders_by_user'})
    async getOrdersByUserId(userId: number) {
        return this.ordersService.findOrdersByUserId(userId);
    }

    // request to get order by id
    @MessagePattern({cmd: 'get_order_by_id'})
    async getOrderById(id: number) {
        return this.ordersService.findOrderById(id);
    }

    // request to get orders by status, case insensitive
    @MessagePattern({cmd: 'get_orders_by_status'})
    async getOrdersByStatus(status: string) {
        return this.ordersService.findOrdersByStatus(status);
    }

    // request to get orders by item name, case insensitive
    @MessagePattern({cmd: 'get_orders_by_item'})
    async getOrdersByItem(item: string) {
        return this.ordersService.findOrdersByItem(item);
    }
}
