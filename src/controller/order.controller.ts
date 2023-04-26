import { Request, Response } from 'express';
import OrderService from '../service/order.service';

export default class OrderController {
  orderService: OrderService;

  constructor(orderService = new OrderService()) {
    this.orderService = orderService;
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  }
}