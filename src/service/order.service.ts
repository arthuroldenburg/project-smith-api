import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  async create(user: string, productsIds: number[]) {
    const obj = { user, productsIds };
    const order = await this.model.create(obj);
    return order;
  }
}