import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const [result] = await this.connection.execute<Order[] & RowDataPacket[]>(
      `SELECT orders.id, JSON_ARRAYAGG(products.id) AS
      productsIds, orders.user_id as userId FROM Trybesmith.orders INNER JOIN
      Trybesmith.products ON orders.id = products.order_id GROUP BY orders.id`,
    );
    return result;
  }
}