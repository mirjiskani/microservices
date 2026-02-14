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
    const orders = this.orders.filter(order => order.userId === Number(userId));
    if (orders.length === 0) {
      return { status: 'error', message: 'No orders found for the specified user' };
    }
    return { status: 'success', data: orders };
  }
  findOrderById(id: number) {
    const order = this.orders.find(order => order.id === Number(id));
    if (!order) {
      return{ status: 'error', message: 'Order not found' };
    }
    return { status: 'success', data: order };
  }
  findOrdersByStatus(status: string) {
    const orders = this.orders.filter(order => order.status === String(status));
    if (orders.length === 0) {
      return { status: 'error', message: 'No orders found with the specified status' };
    }
    return { status: 'success', data: orders };
  }
  findOrdersByItem(item: string) {
    const orders = this.orders.filter(order => order.item.toString().toLowerCase() === item.toString().toLowerCase());
    if (orders.length === 0) {
      return { status: 'error', message: 'No orders found with the specified item' };
    }
    return { status: 'success', data: orders };
  }
}
