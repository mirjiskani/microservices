import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
    private orders = [
    { id: 1, userId: 1, item: 'Laptop', status: 'pending' },
    { id: 2, userId: 2, item: 'Phone', status: 'shipped' },
  ];

  getOrders() {
    return this.orders;
  }
  findOrdersByUserId(userId: number) {
    return this.orders.filter(order => order.userId === userId);
  }
  findOrderById(id: number) {
    return this.orders.find(order => order.id === id);
  }
  findOrdersByStatus(status: string) {
    return this.orders.filter(order => order.status === status);
  }
  findOrdersByItem(item: string) {
    return this.orders.filter(order => order.item.toLowerCase() === item.toLowerCase());
  }
}
