import { Pool } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Product[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.products');
    const [rows] = result;
    return rows as Product[];
  }
}