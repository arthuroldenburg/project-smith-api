import { Pool, RowDataPacket, FieldPacket } from 'mysql2/promise';
import Order from '../interfaces/order.interface';
import User from '../interfaces/user.interface';

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

  async create(order: any) {
    const { user, productsIds } = order;
    console.log(productsIds);
    const [rows] = (await this.connection.execute(
      'SELECT id FROM Trybesmith.users WHERE username = ?',
      [user],
    ) as [User[], FieldPacket[]]);
    const [xablau] = await this.connection.execute(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [rows[0].id],
    );
    const { insertId } = xablau as RowDataPacket;
    productsIds.map(async (e: number) => {
      await this.connection.execute(
        'UPDATE Trybesmith.products SET order_id=? WHERE id=?',
        [insertId, e],
      );
    });
    
    return { userId: rows[0].id, productsIds };
  }
}