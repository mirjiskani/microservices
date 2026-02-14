import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
    
    @Get()
    async getOrders() {
        return this.ordersService.getOrders();
    }
    
    // request to get orders by user id
    @Get('user/:id')
    async getOrdersByUserId(@Param('id') id: number) {
        return this.ordersService.findOrdersByUserId(id);
    }

    // request to get order by id
    @Get(':id')
    async getOrderById(@Param('id') id: number) {
        console.log('id', id);
        return this.ordersService.findOrderById(id);
    }

    // request to get orders by status, case insensitive
    @Get('status/:status')
    async getOrdersByStatus(@Param('status') status: string) {
        console.log('status', status);
        return this.ordersService.findOrdersByStatus(status);
    }

    // request to get orders by item name, case insensitive
    @Get('item/:item')
    async getOrdersByItem(@Param('item') item: string) {
        console.log('item', item);
        return this.ordersService.findOrdersByItem(item);
    }
    

}
